import ChatBox from "@/component/chat/ChatBox";
import CenterLayout from "@/component/MainContent/Layout";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarGroup";

export default function GroupChat() {
  return (
    <>
      <NavBar />
      <CenterLayout>
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
      </CenterLayout>
      <ChatBox />
    </>
  )
}