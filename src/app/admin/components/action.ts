"use server"

import { createClient } from "@/utils/supabase.server"
import { Session } from "@supabase/supabase-js"
import { userProfiles } from "../profil/profil"

export async function getSession() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession() as {
    data: {
      session: Session
    }
  }
  const { data: userProfiles } = await supabase.from('profiles').select("*").eq('id', session.user.id).single() as { data: userProfiles }
  return { session, userProfiles };
}

export async function getNotifications(id: string) {
  const supabase = await createClient();
  const { data } = (await supabase.from("notifications").select('*').eq('user_id', id))
  return data
}