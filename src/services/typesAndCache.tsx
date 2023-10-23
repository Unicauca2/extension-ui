export async function getTypes() {
  const types = await fetch(
    process.env.BASE_URL_EXTENSION_API + "/domain/allTypes",
    {
      headers: { "Cache-Control": "no-store, max-age=0" },
    }
  );
  if (types.ok) return await types.json();
  return false;
}
