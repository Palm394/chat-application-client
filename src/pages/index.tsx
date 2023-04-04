import ChatListItem from "@/component/chat/message/ChatListItem";
import NavBar from "@/component/navbar/NavBar";
import CreateGroup from "@/component/group/CreateGroup";
import ChatList from "@/component/chat/ChatList";

export default function Home() {
  return (
    <>
      <NavBar />
      <ChatList>
        <ChatListItem href="/chat/1" label="client1" type="1-1" />
        <ChatListItem href="/chat/1" label="client1" type="1-1" />
        <ChatListItem href="/chat/1" label="client1" type="1-1" />
        <ChatListItem href="/chat/1" label="client1" type="1-1" />
        <ChatListItem href="/chat/1" label="client1" type="1-1" />
      </ChatList>
      <ChatList>
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
        <ChatListItem href="/group_chat/1" label="client1" type="Group" />
      </ChatList>
      <CreateGroup />
    </>
  )
}