import { useEffect, useState } from "react";
import { getCategories } from "@/services/category.service";

export function useCategory() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getCategories();
      setCategories(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    categories,
    loading,
  };
}