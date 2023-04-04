import Chat from "@/component/chat/Chat";
import NavBar from "@/component/navbar/NavBar";
import CreateGroup from "@/component/group/CreateGroup";
import CenterList from "@/component/chat/CenterList";

export default function Home() {
  return (
    <>
      <NavBar />
      <CenterList>
        <Chat href="/chat/1" label="client1" type="1-1" />
        <Chat href="/chat/1" label="client1" type="1-1" />
        <Chat href="/chat/1" label="client1" type="1-1" />
        <Chat href="/chat/1" label="client1" type="1-1" />
        <Chat href="/chat/1" label="client1" type="1-1" />
      </CenterList>
      <CenterList>
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
      </CenterList>
      <CreateGroup />
    </>
  )
}