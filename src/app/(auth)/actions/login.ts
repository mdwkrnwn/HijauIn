"use server"
import { createClient } from "@/utils/supabase.server";

export async function loginUser(formData: FormData) {
  const email = formData.get("email")!.toString();
  const password = formData.get("password")!.toString();

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: "Success Login" };
}