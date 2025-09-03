import { useState, useEffect, useMemo } from "react";
import { UsersFetch } from "../../../shared/services/users";
import type { User } from "../../../shared/types/usert";

export const useUsers = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fecthUsers = async () => {
      setLoading(true);
      try {
        const data = await UsersFetch();
        setAllUsers(data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fecthUsers();
  }, []);

  const filteredUsers = useMemo(
    () =>
      allUsers.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [allUsers, search]
  );

  return { loading, filteredUsers, search, setSearch };
};
