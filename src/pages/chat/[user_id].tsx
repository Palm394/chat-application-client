import List from "@/component/common/List";
import ChatBox from "@/component/chat/ChatBox";
import CenterLayout from "@/component/MainContent/Layout";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarOneToOne";

export default function Chat() {
  return (
    <>
      <NavBar />
      <CenterLayout>
        <List>
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
        </List>
      </CenterLayout>
      <ChatBox />
    </>
  )
}