/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@clerk/astro/env" />

declare namespace App {
  // Extiende la interfaz Locals de Clerk con campos propios
  interface Locals {
    userRole?: "admin" | "user";
    clerkId?: string;
  }
}
