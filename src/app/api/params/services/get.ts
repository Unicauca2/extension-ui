import APIUrls from "@/models/APIUrls";

async function get() {
  const response = await fetch(
    process.env.BASE_URL_EXTENSION_API + APIUrls.getAppParams,
    {
      next: { revalidate: 86400 },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return { success: true, result: data.result };
  }
  return { success: false, message: "Error retrieving data" };
}

export { get };
