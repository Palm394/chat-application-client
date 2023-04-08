import Chat from "@/component/chat/Chat";
import NavBar from "@/component/navbar/NavBar";
import CreateGroup from "@/component/group/CreateGroup";
import CenterList from "@/component/chat/CenterList";
import { Collapse } from "@mui/material";
import useCollaspe from "@/hook/useCollaspe";
import CollaspeButton from "@/module/home/CollaspeButton";
import { SocketContext } from "@/context/socket";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const socket = useContext(SocketContext);
  const collaspeClient = useCollaspe();
  const collaspeServer = useCollaspe();

  const [groups, setGroups] = useState<any>({});

  useEffect(() => {
    const groupListener = (group: any) => {
      setGroups((prevGroups: any) => {
        const newGroups = { ...prevGroups };
        newGroups[group._id] = group;
        return newGroups;
      });
    };

    socket.on("group", groupListener);
    socket.emit("getGroups");
  }, [socket]);

  return (
    <>
      <NavBar />
      <CenterList>
        <CollaspeButton name={"Client"} amount={0} onClick={collaspeClient.onClick} />
        <Collapse in={collaspeClient.open}>
          <Chat href="/chat/1" label="client1" type="Direct" />
          <Chat href="/chat/1" label="client1" type="Direct" />
          <Chat href="/chat/1" label="client1" type="Direct" />
          <Chat href="/chat/1" label="client1" type="Direct" />
          <Chat href="/chat/1" label="client1" type="Direct" />
        </Collapse>
        <CollaspeButton name={"Group"} amount={0} onClick={collaspeServer.onClick} />
        <Collapse in={collaspeServer.open}>
          <Collapse in={collaspeServer.open}>
            {[...Object.values(groups)].map((group: any, index: any) => (
              <Chat
                key={index}
                href={`/group_chat/${JSON.stringify(group._id)}`}
                label={group.name}
                type="Group"
              />
            ))}
          </Collapse>
        </Collapse>
        <CollaspeButton name={"Group"} amount={0} onClick={collaspeServer.onClick} />
      </CenterList>
      <CreateGroup />
    </>
  );
}
