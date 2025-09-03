import { UserCard } from "../../../shared/components/UserCard";
import type { User } from "../../../shared/types/usert";

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <>
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    mail={user.email}
                    city={user.address.city}
                />
            ))}
        </>
    );
};

export default UserList;
