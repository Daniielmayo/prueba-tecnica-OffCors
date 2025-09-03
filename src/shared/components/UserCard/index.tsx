import { CiMail, CiMap, CiUser } from "react-icons/ci";
import Icon from "../Icons";
import Text from "../Text";
import styles from "./UserCard.module.css";

interface UserCardProps {
  name: string;
  mail: string;
  city: string;
  className?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, mail, city }) => {
  return (
    <div className={styles.card}>
      <div className={styles.contentText}>
        <Icon icon={CiUser} size={24} />
        <Text variant="title" className={styles.title}>
          {name}
        </Text>
      </div>
      <div className={styles.contentText}>
        <Icon icon={CiMail} />
        <Text>{mail}</Text>
      </div>
      <div className={styles.contentText}>
        <Icon icon={CiMap} />
        <Text>{city}</Text>
      </div>
    </div>
  );
};
