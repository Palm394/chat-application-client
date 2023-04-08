import ChatBox from "@/component/chat/ChatBox";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarOneToOne";
import CenterList from "@/component/chat/CenterList";

export default function Chat() {
  return (
    <>
      <NavBar />
      <CenterList>
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
        <Message text={"sample message"} type={"Direct"} isMine={false} />
        <Message text={"sample message"} type={"Direct"} isMine={true} />
      </CenterList>
      <ChatBox />
    </>
  )
}