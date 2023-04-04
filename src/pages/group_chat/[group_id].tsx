import ChatBox from "@/component/chat/ChatBox";
import ChatList from "@/component/chat/message/ChatList";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarGroup";

export default function GroupChat() {
  return (
    <>
      <NavBar />
      <ChatList>
        <Message isMine={false} type={"Group"} />
        <Message isMine={false} type={"Group"} />
        <Message isMine={false} type={"Group"} />
        <Message isMine={false} type={"Group"} />
        <Message isMine={true} type={"Group"} />
        <Message isMine={false} type={"Group"} />
        <Message isMine={false} type={"Group"} />
        <Message isMine={false} type={"Group"} />
        <Message isMine={false} type={"Group"} />
        <Message isMine={true} type={"Group"} />
        <Message isMine={true} type={"Group"} />
      </ChatList>
      <ChatBox />
    </>
  )
}