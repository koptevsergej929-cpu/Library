import type { UserData } from "../types/user/user";

export function UserCard(props: {user: UserData}) {
    const {user} = props;
    return  <article key={user.id}>{user.username}</article>
}