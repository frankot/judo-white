export async function submitForm(formData: {
  formType: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}) {
  try {
    console.log("Submitting form data:", formData);

    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    let data;
    try {
      data = await response.json();
    } catch (e) {
      console.error("Failed to parse response:", await response.text());
      throw new Error("Invalid server response");
    }

    console.log("Server response:", data);

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to submit form");
    }

    return {
      success: true,
      message: data.message || "Formularz został wysłany pomyślnie",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.",
    };
  }
}
