

export const getLocations = async () => {
    try {
      const response = await fetch(`/api/get-locations`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching locations:", error);
      return [];
    }
  };

  export const postLocations = async () => {
    try {
      const response = await fetch(`/api/create-locations`, {
        method: "POST",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching locations:", error);
      return [];
    }
  };