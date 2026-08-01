import { supabase } from "@/utils/supabase";
import { Activity, CreateActivityInput } from "@/types/activity";

export const ActivityService = {
  // =========================
  // GET ALL
  // =========================
  async getAll(userId: string): Promise<Activity[]> {
    console.log("USER ID =", userId);

    const { data, error } = await supabase
      .from("eco_actions")
      .select(
        `
      *,
      category:categories(
        id,
        name,
        color,
        icon
      )
    `,
      )
      .eq("user_id", userId)
      .order("activity_date", { ascending: false });

    console.log("DATA =", data);
    console.log("ERROR =", error);

    if (error) throw error;

    return data as Activity[];
  },

  // =========================
  // GET BY ID
  // =========================
  async getById(id: string): Promise<Activity> {
    const { data, error } = await supabase
      .from("eco_actions")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data as Activity;
  },

  // =========================
  // CREATE
  // =========================
  async create(payload: CreateActivityInput) {
    const { data, error } = await supabase
      .from("eco_actions")
      .insert({
        ...payload,
        verification_type: payload.verification_type ?? "manual",
        status: payload.status ?? "verified",
        activity_date: payload.activity_date ?? new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  // =========================
  // UPDATE
  // =========================
  async update(id: string, payload: Partial<CreateActivityInput>) {
    const { data, error } = await supabase
      .from("eco_actions")
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  // =========================
  // DELETE
  // =========================
  async delete(id: string) {
    const { error } = await supabase.from("eco_actions").delete().eq("id", id);

    if (error) throw error;
  },
};
