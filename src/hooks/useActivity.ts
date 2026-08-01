import { useState } from "react";
import { ActivityService } from "@/services/activity.service";
import { Activity, CreateActivityInput } from "@/types/activity";

export function useActivity() {
  const [loading, setLoading] = useState(false);

  const [activities, setActivities] = useState<Activity[]>([]);

  const getActivities = async (userId: string) => {
    try {
      setLoading(true);

      const result = await ActivityService.getAll(userId);

      setActivities(result);

      return result;
    } finally {
      setLoading(false);
    }
  };

  const createActivity = async (payload: CreateActivityInput) => {
    try {
      setLoading(true);

      return await ActivityService.create(payload);
    } finally {
      setLoading(false);
    }
  };

  const updateActivity = async (
    id: string,
    payload: Partial<CreateActivityInput>
  ) => {
    try {
      setLoading(true);

      return await ActivityService.update(id, payload);
    } finally {
      setLoading(false);
    }
  };

  const deleteActivity = async (id: string) => {
    try {
      setLoading(true);

      await ActivityService.delete(id);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,

    activities,

    getActivities,

    createActivity,

    updateActivity,

    deleteActivity,
  };
}