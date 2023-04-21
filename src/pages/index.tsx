import Chat from "@/component/chat/Chat";
import NavBar from "@/component/NavBar/NavBar";
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
import { DEFAULT_CURRENT_USER, SOCKET_MESSAGE } from "@/type/Constant";
import { useRouter } from "next/router";
import Loading from "@/component/common/Loading";

export default function Home() {
  const router = useRouter();
  const socket = useContext(SocketContext);
  const [currentUser, _] = useLocalStorage<User>("user_data");

  const collaspeClient = useCollaspe();
  const collaspeServer = useCollaspe();

  const [users, setUsers] = useState<{ [key: string]: UserSocketType }>({});
  const [groups, setGroups] = useState<{ [key: string]: GroupSocketType }>({});

  useEffect(() => {
    if (JSON.stringify(currentUser) === JSON.stringify(DEFAULT_CURRENT_USER)) {
      router.push("/login");
      return;
    }
    getUsers();
    getGroups();
  }, [socket, currentUser]);

  function getUsers() {
    // retreive users
    const userListener = (user: UserSocketType) => {
      if (user.myUserId === currentUser.userId) {
        setUsers((prevUsers: { [key: string]: UserSocketType }) => {
          const newUsers = { ...prevUsers };
          newUsers[user._id] = user;
          return newUsers;
        });
      }
    };
    socket.on("get_users_response", (res: ResType) =>
      console.log("Get Users Status:", res.message)
    );
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
    socket.on("get_groups_response", (res: ResType) =>
      console.log("Get Groups Status:", res.message)
    );
    socket.on("group", groupListener);
    socket.emit("getGroups");
  }

  if (!socket.connected) {
    return <Loading />;
  }

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
          {/* <Chat href={`/chat/1`} label={"TEMP USER"} type="Direct" /> */}
          {[...Object.values(users)]
            .sort((a: UserSocketType, b: UserSocketType) => a.username.localeCompare(b.username))
            .map((user: UserSocketType, index: number) => (
              <Chat
                key={index}
                href={`/chat/${user.chatId}`}
                label={user.username}
                avatar={user.profileImage}
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
          {/* <Chat href={`/group_chat/1`} label={"TEMP GROUP"} type="Group" /> */}
          {[...Object.values(groups)]
            .sort((a: GroupSocketType, b: GroupSocketType) => a.name.localeCompare(b.name))
            .map((group: GroupSocketType, index: number) => (
              <Chat key={index} href={`/group_chat/${group._id}`} label={group.name} type="Group" />
            ))}
        </Collapse>
      </CenterList>
      <CreateGroup />
    </>
  );
}
