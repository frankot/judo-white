import emailjs from "@emailjs/browser";

async function verifyRecaptcha(token: string) {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function submitForm(formData: {
  formType: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  recaptchaToken: string;
}) {
  try {
    // Verify reCAPTCHA first
    const isValid = await verifyRecaptcha(formData.recaptchaToken);
    if (!isValid) {
      return { success: false, message: "Weryfikacja reCAPTCHA nie powiodła się" };
    }

    const formTypeLabels = {
      membership: "Zgłoszenie członkowskie",
      camps: "Obozy / półkolonie",
      events: "Wydarzenia klubowe",
    };

    const templateParams = {
      to_name: "JudoDrako",
      to_email: "judodrako@judodrako.pl",
      from_name: `${formData.firstName} ${formData.lastName}`,
      form_type:
        formTypeLabels[formData.formType as keyof typeof formTypeLabels] ||
        formData.formType,
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Formularz został wysłany pomyślnie",
      };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    return {
      success: false,
      message:
        "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.",
    };
  }
}
