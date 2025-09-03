import { LuUserSearch } from "react-icons/lu";
import Icon from "../../../shared/components/Icons";
import Text from "../../../shared/components/Text";

const NoUsersFound = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon size={50} icon={LuUserSearch} />
      <Text variant="subtitle">No se encontraron usuarios</Text>
    </div>
  );
};

export default NoUsersFound;
