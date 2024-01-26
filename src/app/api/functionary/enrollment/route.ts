import APIUrls from "@/models/APIUrls";
import { NextRequest, NextResponse } from "next/server";
import { handleError } from "../../util/handleException";

export interface IGet {
  idPeriod: number;
  idProgram: number;
}
async function get({ idPeriod, idProgram }: IGet) {
  const response = await fetch(
    process.env.BASE_URL_EXTENSION_API +
      APIUrls.getEnrollmentList +
      "idPeriod=" +
      idPeriod +
      "&idProgram=" +
      idProgram
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
      idPeriod: +(request.nextUrl.searchParams.get("idPeriod") as string),
      idProgram: +(request.nextUrl.searchParams.get("idProgram") as string),
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
