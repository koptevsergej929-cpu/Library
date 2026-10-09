
import type {UserData} from '../types/user/user';
import { UserCard } from './UserCard';
    interface UserDataProps {
        userData: UserData[];
    }


export function Header(props: UserDataProps) {
    const {userData} = props
    return (
       <header>
          {userData.map(user => (
            <UserCard key={user. id} user={user} />
          ))}
        </header>
    );
}