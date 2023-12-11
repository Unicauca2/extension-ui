export async function getTypes() {
  try{
    const types = await fetch(
      process.env.BASE_URL_EXTENSION_API + "/v1/domain/allTypes",
      {
        next: { revalidate: 3600 },
      }
    );
    if (types.ok) {
      return await types.json();
    }
  }catch(error){
    return {};
  }
}
