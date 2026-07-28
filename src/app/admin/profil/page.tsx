import React from 'react'
import Profil from './profil';
import { supabase } from '@/utils/supabase';

const ProfilePage = async () => {
  const { data } = await supabase.auth.getUser();
  console.log(data);

  return (
    <Profil />
  )
}

export default ProfilePage;
