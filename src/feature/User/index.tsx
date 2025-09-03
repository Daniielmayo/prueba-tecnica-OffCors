import { useEffect, useState } from "react";
import { UserCard } from "../../shared/components/UserCard";
import { UsersFetch } from "../../shared/services/users";
import type { User } from "../../shared/types/usert";
import styles from "./Users.module.css";
import Input from "../../shared/components/Input";
import Text from "../../shared/components/Text";
import Button from "../../shared/components/Button";

export const Users = () => {
  const [user, setUser] = useState<User[]>();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(search);
  useEffect(() => {
    const fecthUsers = async () => {
      setLoading(true);
      const data = await UsersFetch();
      setUser(data);
      setLoading(false);
    };
    fecthUsers();
  }, []);

  return (
    <main className={styles.container}>
      {/* <section> */}
        <Text variant="title">Usuarios</Text>
        <div className={styles.containerSearch}>
          <Input
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }}
            placeholder={"Buscar usuario por nombre"}
          />
          <Button>Buscar</Button>
        </div>
      {/* </section> */}
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <section className={styles.containerCards}>
          {user?.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              mail={user.email}
              city={user.address.city}
            />
          ))}
        </section>
      )}
    </main>
  );
};
