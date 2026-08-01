import { supabase } from "@/utils/supabase";
import { calculateLevel } from "@/utils/level";

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
}

export async function updateProfile(
  userId: string,
  payload: {
    xp: number;
    eco_score: number;
    level: number;
  },
) {
  const { data, error } = await supabase
    .from("profiles")
    .update(payload)
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function rewardUser(userId: string, point: number) {
  // ambil profile
  const profile = await getProfile(userId);

  const newXP = profile.xp + point;

  const newEcoScore = profile.eco_score + point;

  const newLevel = calculateLevel(newXP);

  const updatedProfile = await updateProfile(userId, {
    xp: newXP,
    eco_score: newEcoScore,
    level: newLevel,
  });

  return updatedProfile;
}
