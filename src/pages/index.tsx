import Chat from "@/component/chat/Chat";
import NavBar from "@/component/NavBar/NavBar";
import CreateGroup from "@/component/group/CreateGroup";
import CenterList from "@/component/chat/CenterList";
import { Collapse } from "@mui/material";
import useCollaspe from "@/hook/useCollaspe";
import CollaspeButton from "@/module/home/CollaspeButton";

export default function Home() {
  const collaspeClient = useCollaspe();
  const collaspeServer = useCollaspe();

  return (
    <>
      <NavBar />
      <CenterList>
        <CollaspeButton name={"Client"} amount={0} onClick={collaspeClient.onClick} />
        <Collapse in={collaspeClient.open}>
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/2" label="client1" type="1-1" />
          <Chat href="/chat/3" label="client1" type="1-1" />
          <Chat href="/chat/4" label="client1" type="1-1" />
          <Chat href="/chat/5" label="client1" type="1-1" />
        </Collapse>
        <CollaspeButton name={"Group"} amount={0} onClick={collaspeServer.onClick} />
        <Collapse in={collaspeServer.open}>
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
        </Collapse>
      </CenterList>
      <CreateGroup />
    </>
  );
}
