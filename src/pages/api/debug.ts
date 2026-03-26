import type { APIRoute } from "astro";
import { supabase } from "@/db/supabase";

/** GET /api/debug — Diagnostica la conexión con Supabase */
export const GET: APIRoute = async () => {
  const supabaseUrl = import.meta.env.SUPABASE_URL;
  const supabaseKey = import.meta.env.SUPABASE_KEY;

  const diagnostico: Record<string, unknown> = {
    supabaseUrl: supabaseUrl ?? "NO DEFINIDA",
    supabaseKeyPresente: !!supabaseKey,
    supabaseKeyPrimeros20: supabaseKey ? supabaseKey.substring(0, 20) + "..." : "NO DEFINIDA",
    supabaseKeyLongitud: supabaseKey?.length ?? 0,
  };

  // Test 1: SELECT en platillos
  const { data: platillos, error: errorSelect } = await supabase
    .from("platillos")
    .select("*");

  diagnostico.selectPlatillos = {
    data: platillos,
    error: errorSelect ? { message: errorSelect.message, details: errorSelect.details, hint: errorSelect.hint, code: errorSelect.code } : null,
    count: platillos?.length ?? 0,
  };

  // Test 2: SELECT en usuarios
  const { data: usuarios, error: errorUsuarios } = await supabase
    .from("usuarios")
    .select("*");

  diagnostico.selectUsuarios = {
    data: usuarios,
    error: errorUsuarios ? { message: errorUsuarios.message, details: errorUsuarios.details, hint: errorUsuarios.hint, code: errorUsuarios.code } : null,
    count: usuarios?.length ?? 0,
  };

  // Test 3: INSERT test en platillos (sin ejecutar, solo para ver si el error es de RLS)
  const { data: insertTest, error: errorInsert } = await supabase
    .from("platillos")
    .insert({
      titulo: "__test_diagnostico__",
      descripcion: "Test de diagnostico - eliminar",
      gramaje: "0",
      imagen_url: null,
    })
    .select()
    .single();

  diagnostico.insertTest = {
    data: insertTest,
    error: errorInsert ? { message: errorInsert.message, details: errorInsert.details, hint: errorInsert.hint, code: errorInsert.code } : null,
  };

  // Si el insert fue exitoso, eliminar el registro de test
  if (insertTest?.id) {
    await supabase.from("platillos").delete().eq("id", insertTest.id);
    diagnostico.insertTestLimpiado = true;
  }

  return new Response(JSON.stringify(diagnostico, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
