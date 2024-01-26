import APIUrls from "@/models/APIUrls";
import { NextRequest, NextResponse } from "next/server";
import { handleError } from "../../util/handleException";

export interface IPost {
  user: string;
  period: number;
  classroom: number;
  state: number;
  program: number;
  section: string;
  quota: number;
  assignature: number;
  idStudents: number[];
  idTeachers: number[];
}
async function post(props: IPost[]) {
  const response = await fetch(
    process.env.BASE_URL_EXTENSION_API + APIUrls.postClassGroups,
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

export { POST };
