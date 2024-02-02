interface IGetUserData {
  email: string;
}
export async function getUserData({ email }: IGetUserData) {
  try {
    const data = await fetch(
      process.env.BASE_URL_EXTENSION_API +
        "/v1/user/data?username=" +
        email.split("@")[0],
      {
        cache: "no-cache",
      }
    );
    if (data.ok) {
      const aux = await data.json();
      return aux;
    }
    return false;
  } catch (error) {
    return false;
  }
}
