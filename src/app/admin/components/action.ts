"use server"

import { createClient } from "@/utils/supabase.server"
import { Session } from "@supabase/supabase-js"

export async function getSession() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession() as {
    data: {
      session: Session
    }
  }
  return session;
}