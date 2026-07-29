import { createClient } from '@/utils/supabase.server'
import React from 'react'
import { Community } from '../page';
import DetailKomunitas from './communitySlug';

async function CommunitySlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: communities } = await supabase
    .from('communities')
    .select('*').eq('id', slug).single() as { data: Community }

  return (
    <DetailKomunitas community={communities} />
  )
}

export default CommunitySlug