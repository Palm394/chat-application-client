import CenterLayout from "@/component/MainContent/Layout";
import SingleChatList from "@/component/chat/message/SingleChatList";
import NavBar from "@/component/navbar/NavBar";
import List from "@/component/common/List";
import CreateGroup from "@/component/group/CreateGroup";

export default function Home() {
  return (
    <>
      <NavBar />
      <CenterLayout>
        <List>
          <SingleChatList href="/chat/1" label="client1" type="1-1" />
          <SingleChatList href="/chat/1" label="client1" type="1-1" />
          <SingleChatList href="/chat/1" label="client1" type="1-1" />
          <SingleChatList href="/chat/1" label="client1" type="1-1" />
          <SingleChatList href="/chat/1" label="client1" type="1-1" />
        </List>
        <List>
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
        </List>
      </CenterLayout>
      <CreateGroup />
    </>
  )
}