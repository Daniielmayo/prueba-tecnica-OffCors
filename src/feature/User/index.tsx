import { useEffect, useState } from "react";
import { UserCard } from "../../shared/components/UserCard";
import { UsersFetch } from "../../shared/services/users";
import type { User } from "../../shared/types/usert";
import styles from "./Users.module.css";
import Input from "../../shared/components/Input";
import Text from "../../shared/components/Text";
import SkeletonCard from "../../shared/components/SkeletonCard";

export const Users = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fecthUsers = async () => {
      setLoading(true);
      const data = await UsersFetch();
      setAllUsers(data || []);
      setLoading(false);
    };
    fecthUsers();
  }, []);

  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className={styles.container}>
      <Text variant="title">Usuarios</Text>
      <div className={styles.containerSearch}>
        <Input
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
          placeholder={"Buscar usuario por nombre"}
        />
      </div>
      <section className={styles.containerCards}>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                mail={user.email}
                city={user.address.city}
              />
            ))}
      </section>
    </main>
  );
};
