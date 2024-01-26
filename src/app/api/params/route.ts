import { NextResponse } from "next/server";
import { handleError } from "../util/handleException";
import { get } from "./services/get";

export async function GET() {
  try {
    const flag = await get();
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
