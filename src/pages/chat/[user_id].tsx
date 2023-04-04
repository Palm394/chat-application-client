import ChatBox from "@/component/chat/ChatBox";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarOneToOne";
import CenterList from "@/component/chat/CenterList";

export default function Chat() {
  return (
    <>
      <NavBar />
      <CenterList>
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
        <Message text={"sample message"} type={"1-1"} isMine={false} />
        <Message text={"sample message"} type={"1-1"} isMine={true} />
      </CenterList>
      <ChatBox />
    </>
  )
}