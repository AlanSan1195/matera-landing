import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// ---------------------------------------------------------------------------
// Tipos
// ---------------------------------------------------------------------------

export interface Usuario {
  id: string;
  clerk_id: string;
  name: string;
  email: string;
  rol: "admin" | "user";
}

export interface Platillo {
  id: string;
  titulo: string;
  descripcion: string;
  gramaje: string | null;
  imagen_url: string | null;
  created_at: string;
  updated_at: string;
}

export type PlatilloInsert = Omit<Platillo, "id" | "created_at" | "updated_at">;
export type PlatilloUpdate = Partial<PlatilloInsert>;

// ---------------------------------------------------------------------------
// Usuarios
// ---------------------------------------------------------------------------

export async function getUsuarioByClerkId(
  clerkId: string,
): Promise<Usuario | null> {
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("clerk_id", clerkId)
    .single();

  if (error || !data) return null;
  return data as Usuario;
}

export async function crearUsuario(
  clerkId: string,
  email: string,
  name: string,
): Promise<Usuario | null> {
  const { data, error } = await supabase
    .from("usuarios")
    .insert({ clerk_id: clerkId, email, name, rol: "user" })
    .select()
    .single();

  if (error) {
    console.error("Error al crear usuario:", error.message);
    return null;
  }
  return data as Usuario;
}

export async function esAdmin(clerkId: string): Promise<boolean> {
  const usuario = await getUsuarioByClerkId(clerkId);
  return usuario?.rol === "admin";
}

// ---------------------------------------------------------------------------
// Platillos
// ---------------------------------------------------------------------------

export async function getPlatillos(): Promise<Platillo[]> {
  const { data, error } = await supabase
    .from("platillos")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error al obtener platillos:", error.message);
    return [];
  }
  return (data ?? []) as Platillo[];
}

export async function getPlatilloById(id: string): Promise<Platillo | null> {
  const { data, error } = await supabase
    .from("platillos")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as Platillo;
}

export async function crearPlatillo(
  platillo: PlatilloInsert,
): Promise<Platillo | null> {
  const { data, error } = await supabase
    .from("platillos")
    .insert(platillo)
    .select()
    .single();

  if (error) {
    console.error("Error al crear platillo:", error.message);
    return null;
  }
  return data as Platillo;
}

export async function actualizarPlatillo(
  id: string,
  cambios: PlatilloUpdate,
): Promise<Platillo | null> {
  const { data, error } = await supabase
    .from("platillos")
    .update({ ...cambios, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error al actualizar platillo:", error.message);
    return null;
  }
  return data as Platillo;
}

export async function eliminarPlatillo(id: string): Promise<boolean> {
  const { error } = await supabase.from("platillos").delete().eq("id", id);

  if (error) {
    console.error("Error al eliminar platillo:", error.message);
    return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Storage — bucket "imagenes-platillos"
// ---------------------------------------------------------------------------

const BUCKET = "imagenes-platillos";

export async function subirImagen(
  file: File,
  nombreArchivo: string,
): Promise<string | null> {
  const path = `${Date.now()}-${nombreArchivo}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    console.error("Error al subir imagen:", error.message);
    return null;
  }

  const { data: publicData } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(path);

  return publicData.publicUrl;
}
