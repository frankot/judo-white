import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    if (!process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL) {
      console.error("Google Script URL is not configured");
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Server configuration error",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    console.log("Sending data to Google Script:", formData);

    const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Google Script response status:", response.status);

    let data;
    const textResponse = await response.text();
    try {
      data = JSON.parse(textResponse);
    } catch (e) {
      console.error("Failed to parse response:", textResponse);
      throw new Error("Invalid response from Google Script");
    }

    console.log("Google Script response data:", data);

    if (response.ok) {
      return new NextResponse(
        JSON.stringify({
          success: true,
          message: data.message || "Formularz został wysłany pomyślnie",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: data.message || "Błąd podczas wysyłania formularza",
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }
  } catch (error) {
    console.error("Detailed error:", error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message:
          error instanceof Error ? error.message : "Wystąpił błąd serwera",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
