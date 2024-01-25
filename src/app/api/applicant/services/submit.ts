async function record(formData: FormData) {
  const submitUrl = formData.get("submitUrl");
  formData.delete("submitUrl");

  async function SubmitData(formData: FormData) {
    if (submitUrl == null) {
      return { success: false, message: "No URL bringed" };
    }
    const response = await fetch(
      (process.env.BASE_URL_EXTENSION_API as string) + submitUrl,
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.ok) {
      const result = await response.json();
      return { success: true, result };
    }
    const message = await response.text();
    return { success: false, message };
  }

  const result = await SubmitData(formData);
  return result;
}

export { record };
