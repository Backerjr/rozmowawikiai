diff --git a/app/(auth)/api/auth/[...nextauth]/route.ts b/app/(auth)/api/auth/[...nextauth]/route.ts
index 588ff6a5ca31b3ddbd00f47b0f2035b3dd36fc05..01a61437bb57861479ab83be1bae0f8b210b6bb9 100644
--- a/app/(auth)/api/auth/[...nextauth]/route.ts
+++ b/app/(auth)/api/auth/[...nextauth]/route.ts
@@ -1,2 +1,8 @@
+// Ensure Next.js treats the auth handlers as fully dynamic. The metadata
+// route that Next.js generates for the catch-all API endpoint cannot be
+// statically exported, so we explicitly opt out of static rendering.
+export const dynamic = "force-dynamic";
+export const revalidate = 0;
+
 // biome-ignore lint/performance/noBarrelFile: "Required"
 export { GET, POST } from "@/app/(auth)/auth";
