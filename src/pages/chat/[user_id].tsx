import ChatBox from "@/component/chat/ChatBox";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarOneToOne";
import ChatList from "@/component/chat/message/ChatList";

export default function Chat() {
  return (
    <>
      <NavBar />
      <ChatList>
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
        <Message type={"1-1"} isMine={false} />
        <Message type={"1-1"} isMine={true} />
      </ChatList>
      <ChatBox />
    </>
  )
}