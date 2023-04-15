import Chat from "@/component/chat/Chat";
import NavBar from "@/component/navbar/NavBar";
import CreateGroup from "@/component/group/CreateGroup";
import CenterList from "@/component/chat/CenterList";
import { Collapse } from "@mui/material";
import useCollaspe from "@/hook/useCollaspe";
import CollaspeButton from "@/module/home/CollaspeButton";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/context/SocketContext";
import useLocalStorage from "@/hook/useLocalStorage";
import { User } from "@/type/User";
import { GroupSocketType, ResType, UserSocketType } from "@/type/Socket";

export default function Home() {
  const socket = useContext(SocketContext);
  const [currentUser, _] = useLocalStorage<User>("user_data");

  const collaspeClient = useCollaspe();
  const collaspeServer = useCollaspe();

  const [users, setUsers] = useState<{ [key: string]: UserSocketType }>({});
  const [groups, setGroups] = useState<{ [key: string]: GroupSocketType }>({});

  function getUsers() {
    // retreive users
    const userListener = (user: UserSocketType) => {
      setUsers((prevUsers: { [key: string]: UserSocketType }) => {
        const newUsers = { ...prevUsers };
        newUsers[user._id] = user;
        console.log(user);
        return newUsers;
      });
    };
    socket.on("get_users_response", (res: ResType) => console.log(res.message));
    socket.on("user", userListener);
    socket.emit("getUsers", currentUser.userId);
  }

  function getGroups() {
    // retreive groups
    const groupListener = (group: GroupSocketType) => {
      setGroups((prevGroups: { [key: string]: GroupSocketType }) => {
        const newGroups = { ...prevGroups };
        newGroups[group._id] = group;
        return newGroups;
      });
    };
    socket.on("get_groups_response", (res: ResType) => console.log(res.message));
    socket.on("group", groupListener);
    socket.emit("getGroups");
  }

  useEffect(() => {
    getUsers();
    getGroups();
  }, [socket]);

  return (
    <>
      <NavBar />
      <CenterList>
        <CollaspeButton
          name={"Client"}
          amount={[...Object.values(users)].length}
          onClick={collaspeClient.onClick}
        />
        <Collapse in={collaspeClient.open}>
          <Chat href={`/chat/1`} label={"TEMP USER"} type="Direct" />
          {[...Object.values(users)].map((user: UserSocketType, index: number) => (
            <Chat key={index} href={`/chat/${user.chatId}`} label={user.username} type="Direct" />
          ))}
        </Collapse>
        <CollaspeButton
          name={"Group"}
          amount={[...Object.values(groups)].length}
          onClick={collaspeServer.onClick}
        />
        <Collapse in={collaspeServer.open}>
          <Chat href={`/group_chat/1`} label={"TEMP GROUP"} type="Group" />
          {[...Object.values(groups)].map((group: GroupSocketType, index: number) => (
            <Chat key={index} href={`/group_chat/${group._id}`} label={group.name} type="Group" />
          ))}
        </Collapse>
      </CenterList>
      <CreateGroup />
    </>
  );
}
