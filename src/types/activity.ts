export interface Activity {
  id: string;
  user_id: string;
  category_id: string;

  title: string;
  description: string;

  point: number;

  co2_saved: number;
  water_saved: number;
  energy_saved: number;

  verification_type: string;
  status: string;

  image_url?: string;
  ai_result?: any;

  activity_date: string;
  created_at: string;
}

export interface CreateActivityInput {
  user_id: string;
  category_id: string;

  title: string;
  description: string;

  point: number;

  co2_saved?: number;
  water_saved?: number;
  energy_saved?: number;

  verification_type?: string;
  status?: string;

  image_url?: string;
  ai_result?: any;

  activity_date?: string;
}