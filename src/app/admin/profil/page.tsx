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


  return (
    <Profil user={user!} />
  )
}

export default ProfilePage;
