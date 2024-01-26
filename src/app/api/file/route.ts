import APIUrls from "@/models/APIUrls";
import { NextRequest, NextResponse } from "next/server";
import { handleError } from "../util/handleException";

export interface IGet {
  fileName: string;
}
async function get({ fileName }: IGet) {
  const response = await fetch(
    process.env.BASE_URL_EXTENSION_API + APIUrls.getFileFromServer + fileName
  );
  if (response.ok) {
    return { success: true, result: response };
  }
  return { success: false, message: "Error retrieving data" };
}
async function GET(request: NextRequest) {
  try {
    const flag = await get({
      fileName: request.nextUrl.searchParams.get("fileName") as string,
    });
    if (!flag.success)
      return handleError({ message: flag.message as string, errorCode: 500 });
    return flag.result;
  } catch (error: any) {
    return NextResponse.json(
      {
        error: `Internal Server Error, message: ${error.message}.`,
      },
      { status: 500 }
    );
  }
}

export { GET };
