import ChatBox from "@/component/chat/ChatBox";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarOneToOne";
import CenterList from "@/component/chat/CenterList";

export default function Chat() {
  return (
    <>
      <NavBar />
      <CenterList>
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
      </CenterList>
      <ChatBox />
    </>
  )
}