import ChatBox from "@/component/chat/ChatBox";
import CenterList from "@/component/chat/CenterList";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarGroup";

export default function GroupChat() {
  return (
    <>
      <NavBar />
      <CenterList>
        <Message text={"sample message"} isMine={false} type={"Group"} />
        <Message text={"sample message"} isMine={false} type={"Group"} />
        <Message text={"sample message"} isMine={false} type={"Group"} />
        <Message text={"sample message"} isMine={false} type={"Group"} />
        <Message text={"sample message"} isMine={true} type={"Group"} />
        <Message text={"sample message"} isMine={false} type={"Group"} />
        <Message text={"sample message"} isMine={false} type={"Group"} />
        <Message text={"sample message"} isMine={false} type={"Group"} />
        <Message text={"sample message"} isMine={false} type={"Group"} />
        <Message text={"sample message"} isMine={true} type={"Group"} />
        <Message text={"sample message"} isMine={true} type={"Group"} />
      </CenterList>
      <ChatBox />
    </>
  )
}