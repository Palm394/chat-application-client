import ChatBox from "@/component/footer/ChatBox";
import CenterLayout from "@/component/MainContent/Layout";
import Message from "@/component/MainContent/Message/Message";
import NavBar from "@/component/NavBar/NavBarGroup";

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