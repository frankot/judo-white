import emailjs from "@emailjs/browser";

export async function submitForm(formData: {
  formType: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}) {
  try {
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
