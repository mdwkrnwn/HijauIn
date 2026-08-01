"use server";

import { createClient } from "@/utils/supabase.server";
import { Session } from "@supabase/supabase-js";
import { userProfiles } from "../profil/profil";

export async function getSession() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      session: null,
      userProfiles: null,
    };
  }

  const { data: userProfiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  return {
    session,
    userProfiles,
  };
}

export async function getNotifications(id: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", id);
  return data;
}

export async function getCurrentUserId() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return user.id;
}

export async function getUserProfile() {
  const { userProfiles } = await getSession();

  return userProfiles;
}
