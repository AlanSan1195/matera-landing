import type { APIRoute } from "astro";
import { subirImagen } from "@/db/supabase";

// POST — subir imagen al bucket "imagenes-platillos"
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return new Response(
      JSON.stringify({ error: "No se recibio un archivo valido" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const url = await subirImagen(file, file.name);

  if (!url) {
    return new Response(
      JSON.stringify({ error: "Error al subir la imagen" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ url }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
