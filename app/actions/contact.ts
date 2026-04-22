"use server";

export async function handleContactForm(formData: FormData) {
  const data = {
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // This is where you'll eventually plug in your email provider (Resend, SendGrid, etc.)
  console.log("New Inquiry for The Ski Barn:", data);

  return {
    success: true,
    message: "Thanks! We'll get back to you soon."
  };
}