"use server"
import { createClient } from "@/utils/supabase.server";

export async function signUpUser(formData: FormData) {
  const email = formData.get("email")!.toString();
  const password = formData.get("password")!.toString();
  const name = formData.get("name")!.toString();
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      }
    }
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: "Success SignUp" };
}