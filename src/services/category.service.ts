import { supabase } from "@/utils/supabase";

export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("created_at");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) throw error;

  return data ?? [];
}