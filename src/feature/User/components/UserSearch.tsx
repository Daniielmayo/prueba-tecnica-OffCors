import Input from "../../../shared/components/Input";
import styles from "../Users.module.css";

interface UserSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const UserSearch = ({ search, onSearchChange }: UserSearchProps) => {
  return (
    <div className={styles.containerSearch}>
      <Input
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSearchChange(e.target.value);
        }}
        placeholder={"Buscar usuario por nombre"}
      />
    </div>
  );
};

export default UserSearch;
