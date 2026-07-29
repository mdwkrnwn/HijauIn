"use server"

import { createClient } from '@/utils/supabase.server'
import { Komunitas } from './community'
export type Community = {
  id: string;
  name: string;
  description: string;
  city: string;
  image: string;
  member_count: number;
  created_at: string;
  caption: string;
  tags: string[];
};
async function CommunityPage() {
  const supabase = await createClient()

  const { data: communities } = await supabase
    .from('communities')
    .select('*') as { data: Community[] }

  return (
    <Komunitas communities={communities} />
  )
}

export default CommunityPage