export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Activity {
  id: string;
  user_id: string;
  category_id: string;

  title: string;
  description: string;
  point: number;

  activity_date: string;

  status: string;
  verification_type: string;

  co2_saved: number;
  water_saved: number;
  energy_saved: number;

  location?: string;
  photo_url?: string;

  category?: Category;
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
