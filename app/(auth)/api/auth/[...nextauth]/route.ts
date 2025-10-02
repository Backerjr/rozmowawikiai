// Ensure Next.js treats the auth handlers as fully dynamic. The metadata
// route that Next.js generates for the catch-all API endpoint cannot be
// statically exported, so we explicitly opt out of static rendering.
export const dynamic = "force-dynamic";
export const revalidate = 0;

// biome-ignore lint/performance/noBarrelFile: "Required"
export { GET, POST } from "@/app/(auth)/auth";
