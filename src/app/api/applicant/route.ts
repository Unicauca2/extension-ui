import { NextRequest, NextResponse } from "next/server";
import { record } from "./services/submit";
import { handleError } from "../util/handleException";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  try {
    const flag = await record(data);
    if (!flag.success) return handleError({message: (flag.message as string), errorCode: 500});

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