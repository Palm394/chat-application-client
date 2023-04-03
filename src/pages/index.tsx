import CenterLayout from "@/component/MainContent/Layout";
import SingleChatList from "@/component/MainContent/SingleChatList";
import NavBar from "@/component/NavBar/NavBar";
import List from "@/component/common/List";

export default function Home() {
  return (
    <>
      <NavBar />
      <CenterLayout>
        <List>
          <SingleChatList href="/chat/1" label="client1" type="Client" />
          <SingleChatList href="/chat/1" label="client1" type="Client" />
          <SingleChatList href="/chat/1" label="client1" type="Client" />
          <SingleChatList href="/chat/1" label="client1" type="Client" />
          <SingleChatList href="/chat/1" label="client1" type="Client" />
        </List>
        <List>
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
          <SingleChatList href="/group_chat/1" label="client1" type="Group" />
        </List>
      </CenterLayout>

    </>
  )
}