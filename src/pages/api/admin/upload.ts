import type { APIRoute } from "astro";
import { subirImagen } from "@/db/supabase";

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

/** Elimina caracteres peligrosos del nombre de archivo. */
function sanitizarNombre(nombre: string): string {
  return nombre
    .replace(/[\/\\:*?"<>|]/g, "") // path traversal y caracteres especiales
    .replace(/\.{2,}/g, ".")       // doble punto
    .replace(/^\.*/, "")           // puntos al inicio
    .trim() || "archivo";
}

// POST — subir imagen al bucket "imagenes-platillos"
export const POST: APIRoute = async ({ request }) => {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return new Response(
      JSON.stringify({ error: "Cuerpo de solicitud invalido" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return new Response(
      JSON.stringify({ error: "No se recibio un archivo valido" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    return new Response(
      JSON.stringify({ error: "Tipo de archivo no permitido. Solo se aceptan: JPEG, PNG, WebP, AVIF" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    return new Response(
      JSON.stringify({ error: "El archivo excede el limite de 5 MB" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const nombreSeguro = sanitizarNombre(file.name);
  const url = await subirImagen(file, nombreSeguro);

  if (!url) {
    return new Response(
      JSON.stringify({ error: "Error al subir la imagen" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ url }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
