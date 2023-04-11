import Chat from "@/component/chat/Chat";
import NavBar from "@/component/navbar/NavBar";
import CreateGroup from "@/component/group/CreateGroup";
import CenterList from "@/component/chat/CenterList";
import { Collapse } from "@mui/material";
import useCollaspe from "@/hook/useCollaspe";
import CollaspeButton from "@/module/home/CollaspeButton";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/context/SocketContext";
import { UserContext } from "@/context/UserContext";

export default function Home() {
  const socket = useContext(SocketContext);
  const userData = useContext(UserContext);

  const collaspeClient = useCollaspe();
  const collaspeServer = useCollaspe();

  const [users, setUsers] = useState<any>({});
  const [groups, setGroups] = useState<any>({});

  useEffect(() => {
    // retreive users
    const userListener = (user: any) => {
      setUsers((prevUsers: any) => {
        const newUsers = { ...prevUsers };
        newUsers[user._id] = user;
        return newUsers;
      });
    };
    socket.on("get_users_response", (res: any) => console.log(res.message));
    socket.on("user", userListener);
    // if (userData) {
    socket.emit("getUsers", "64339a88ede9b0fc8a482d45");
    // }
    console.log(userData?.user);

    // retreive group
    const groupListener = (group: any) => {
      setGroups((prevGroups: any) => {
        const newGroups = { ...prevGroups };
        newGroups[group._id] = group;
        return newGroups;
      });
    };
    socket.on("get_groups_response", (res: any) => console.log(res.message));
    socket.on("group", groupListener);
    socket.emit("getGroups");
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
          {[...Object.values(users)].map((user: any, index: any) => (
            <Chat
              key={index}
              href={`/group_chat/${user._id}`}
              label={user.username}
              type="Direct"
            />
          ))}
        </Collapse>
        <CollaspeButton
          name={"Group"}
          amount={[...Object.values(groups)].length}
          onClick={collaspeServer.onClick}
        />
        <Collapse in={collaspeServer.open}>
          {[...Object.values(groups)].map((group: any, index: any) => (
            <Chat key={index} href={`/group_chat/${group._id}`} label={group.name} type="Group" />
          ))}
        </Collapse>
      </CenterList>
      <CreateGroup />
    </>
  );
}
