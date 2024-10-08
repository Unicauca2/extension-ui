import APIUrls from "@/models/APIUrls";
import { NextRequest, NextResponse } from "next/server";
import { handleError } from "../../util/handleException";

interface IGet {
  idStudent: number;
  idPeriod: number;
}
async function get({ idStudent, idPeriod }: IGet) {
  const response = await fetch(
    process.env.BASE_URL_EXTENSION_API +
      APIUrls.getAcamidOfferURL +
      `idStudent=${idStudent}&idPeriod=${idPeriod}`
  );
  if (response.ok) {
    const data = await response.json();
    return { success: true, result: data.result };
  }
  return { success: false, message: "Error retrieving data" };
}
async function GET(request: NextRequest) {
  try {
    const flag = await get({
      idPeriod: +(request.nextUrl.searchParams.get("idPeriod") as string),
      idStudent: +(request.nextUrl.searchParams.get("idStudent") as string),
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

export interface IPost {
  idProgram: number;
  idPeriod: number;
  idStudent: number;
  idPerson: number;
}
async function post(props: IPost) {
  const response = await fetch(
    process.env.BASE_URL_EXTENSION_API + APIUrls.postAcceptPreEnrollmentURL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    }
  );
  if (response.ok) {
    const data = await response.json();
    return { success: true, result: data.result || data.message };
  }
  return { success: false, message: "Error retrieving data" };
}
async function POST(request: NextRequest) {
  try {
    const flag = await post(await request.json());
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

export { GET, POST };
