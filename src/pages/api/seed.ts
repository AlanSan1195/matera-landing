import type { APIRoute } from "astro";
import { getPlatillos, crearPlatillo } from "@/db/supabase";

const SEED_DATA = [
  {
    titulo: "Chistorra  ( Spanish sausage style )",
    descripcion:
      "Embutido estilo espanol, la carne es 100% de cerdo, su color rojo caracteristico se lo aporta el pimienton como condimento bascio. contiene ajo y la  tripa en la que est embutida es de cordero",
    gramaje: "220 grs.",
    imagen_url: "/dropbox/entradas/chistorraDropbox.webp",
    categoria: "entradas",
  },
  {
    titulo: "Chorizo argentino ( Argentinan sausage style )",
    descripcion:
      "Embutido clasico de las parrilladas argentinas. Elaborado con carne de cerdo y de res, conocido como chorizo criollo para los argentinos. Lo elaboramos en casa y contiene chile quebrado, oregano y ajo.",
    gramaje: "130 grs.",
    imagen_url: "/dropbox/entradas/chistorraDropbox.webp",
    categoria: "entradas",
  },
];

/** GET /api/seed — Inserta los platillos iniciales si la tabla está vacía.
 *  Este endpoint es temporal. Eliminarlo después de ejecutar. */
export const GET: APIRoute = async () => {
  const existentes = await getPlatillos();

  if (existentes.length > 0) {
    return new Response(
      JSON.stringify({
        message: `La tabla ya tiene ${existentes.length} platillo(s). Seed omitido.`,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  }

  const resultados = [];
  for (const data of SEED_DATA) {
    const platillo = await crearPlatillo(data);
    resultados.push(platillo);
  }

  return new Response(
    JSON.stringify({
      message: `Seed completado: ${resultados.length} platillos insertados.`,
      platillos: resultados,
    }),
    { status: 201, headers: { "Content-Type": "application/json" } },
  );
};
