import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";
import { getUsuarioByClerkId, crearUsuario } from "@/db/supabase";

const protectedRoutes = createRouteMatcher(["/Dropbox"]);
const adminApiRoutes = createRouteMatcher(["/api/admin/(.*)"]);

export const onRequest = clerkMiddleware(async (auth, context) => {
  const { userId, redirectToSignIn } = auth();

  // --- Rutas protegidas: requieren autenticación ---
  if (protectedRoutes(context.request) && !userId) {
    return redirectToSignIn();
  }

  // --- Rutas API admin: requieren autenticación + rol admin ---
  if (adminApiRoutes(context.request)) {
    if (!userId) {
      return new Response(JSON.stringify({ error: "No autenticado" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const usuario = await getUsuarioByClerkId(userId);
    if (!usuario || usuario.rol !== "admin") {
      return new Response(JSON.stringify({ error: "No autorizado" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // --- Para /Dropbox: inyectar rol en Astro.locals ---
  if (userId && protectedRoutes(context.request)) {
    let usuario = await getUsuarioByClerkId(userId);

    // Si el usuario no existe en la DB, crearlo con rol 'user'
    if (!usuario) {
      const clerkUser = await context.locals.currentUser();
      const email = clerkUser?.emailAddresses?.[0]?.emailAddress ?? "";
      usuario = await crearUsuario(userId, email);
    }

    context.locals.userRole = usuario?.rol ?? "user";
    context.locals.clerkId = userId;
  }
});
