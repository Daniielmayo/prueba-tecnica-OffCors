import Text from "../../shared/components/Text";
import styles from "./Users.module.css";
import { useUsers } from "./hooks/useUsers";
import UserSearch from "./components/UserSearch";
import LoadingUsers from "./components/LoadingUsers";
import NoUsersFound from "./components/NoUsersFound";
import UserList from "./components/UserList";

export const Users = () => {
  const { loading, filteredUsers, search, setSearch } = useUsers();

  const renderContent = () => {
    if (loading) {
      return <LoadingUsers />;
    }
    if (filteredUsers.length === 0) {
      return <NoUsersFound />;
    }
    return <UserList users={filteredUsers} />;
  };

  return (
    <main className={styles.container}>
      <div className={styles.containerTitle}>
        <Text variant="title"> Usuarios</Text>
      </div>
      <UserSearch search={search} onSearchChange={setSearch} />
      <section className={styles.containerCards}>{renderContent()}</section>
    </main>
  );
};
