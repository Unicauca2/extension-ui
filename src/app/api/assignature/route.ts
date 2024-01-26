import APIUrls from "@/models/APIUrls";
import { NextRequest, NextResponse } from "next/server";
import { handleError } from "../util/handleException";

interface IGet {
  idPensum: number;
}
async function get({ idPensum }: IGet) {
  const response = await fetch(
    process.env.BASE_URL_EXTENSION_API + APIUrls.getAssignatureList + idPensum
  );
  if (response.ok) {
    const data = await response.json();
    return { success: true, result: data.result };
  }
  return { success: false, message: "Error retrieving data" };
}
export async function GET(request: NextRequest) {
  try {
    const flag = await get({
      idPensum: +(request.nextUrl.searchParams.get("idPensum") as string),
    });
    if (!flag.success)
      return handleError({ message: flag.message as string, errorCode: 500 });
    return NextResponse.json(
      { status: true, result: flag.result },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: `Internal Server Error, message: ${error.message}.`,
      },
      { status: 500 }
    );
  }
}
