import type { APIRoute } from "astro";
import {
  getPlatillos,
  crearPlatillo,
  actualizarPlatillo,
  eliminarPlatillo,
} from "@/db/supabase";

// GET — listar todos los platillos
export const GET: APIRoute = async () => {
  const platillos = await getPlatillos();
  return new Response(JSON.stringify(platillos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

// POST — crear un platillo nuevo
export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { titulo, descripcion, gramaje, imagen_url, categoria } = body;

  if (!titulo || !descripcion || !categoria) {
    return new Response(
      JSON.stringify({ error: "Titulo, descripcion y categoria son obligatorios" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const platillo = await crearPlatillo({
    titulo,
    descripcion,
    gramaje: gramaje ?? null,
    imagen_url: imagen_url ?? null,
    categoria,
  });

  if (!platillo) {
    return new Response(
      JSON.stringify({ error: "Error al crear el platillo" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify(platillo), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};

// Campos que se pueden actualizar en un platillo
const CAMPOS_ACTUALIZABLES = ["titulo", "descripcion", "gramaje", "imagen_url", "categoria"] as const;

// PUT — actualizar un platillo existente
export const PUT: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Cuerpo de solicitud invalido" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const { id } = body;

  if (!id) {
    return new Response(
      JSON.stringify({ error: "Se requiere el id del platillo" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  // Solo extraer campos permitidos, ignorar el resto
  const cambios: Record<string, unknown> = {};
  for (const campo of CAMPOS_ACTUALIZABLES) {
    if (campo in body) cambios[campo] = body[campo];
  }

  if (Object.keys(cambios).length === 0) {
    return new Response(
      JSON.stringify({ error: "No se enviaron campos validos para actualizar" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const platillo = await actualizarPlatillo(id as string, cambios);

  if (!platillo) {
    return new Response(
      JSON.stringify({ error: "Error al actualizar el platillo" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify(platillo), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

// DELETE — eliminar un platillo
export const DELETE: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { id } = body;

  if (!id) {
    return new Response(
      JSON.stringify({ error: "Se requiere el id del platillo" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const ok = await eliminarPlatillo(id);

  if (!ok) {
    return new Response(
      JSON.stringify({ error: "Error al eliminar el platillo" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
