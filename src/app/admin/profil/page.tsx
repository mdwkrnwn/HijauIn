"use server"
import { redirect } from 'next/navigation';
import Profil from './profil';
import { createClient } from '@/utils/supabase.server';

const ProfilePage = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return redirect('/login')
  }
  const { data: userProfiles } = await supabase.from('profiles').select("*").eq('id', user.id).single()

  return (
    <Profil user={user!} userProfiles={userProfiles} />
  )
}

export default ProfilePage;
