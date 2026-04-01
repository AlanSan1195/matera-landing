import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { password } = await request.json();
    const expected = import.meta.env.GATE_PASSWORD;

    if (!expected) {
      return new Response(
        JSON.stringify({ error: "Gate no configurada" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    if (password !== expected) {
      return new Response(
        JSON.stringify({ error: "Contraseña incorrecta" }),
        { status: 401, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "gate=ok; HttpOnly; Path=/; SameSite=Lax; Max-Age=86400",
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Cuerpo de solicitud inválido" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }
};
