import List from "@/component/common/List";
import ChatBox from "@/component/footer/ChatBox";
import CenterLayout from "@/component/MainContent/Layout";
import Message from "@/component/MainContent/Message/Message";
import NavBar from "@/component/NavBar/NavBarOneToOne";

export default function Chat() {
  return (
    <>
      <NavBar />
      <CenterLayout>
        <List>
          <Message isMine={false} />
          <Message isMine={true} />
          <Message isMine={false} />
          <Message isMine={true} />
          <Message isMine={false} />
          <Message isMine={true} />
          <Message isMine={false} />
          <Message isMine={true} />
          <Message isMine={false} />
          <Message isMine={true} />
          <Message isMine={false} />
          <Message isMine={true} />
          <Message isMine={false} />
          <Message isMine={true} />
          <Message isMine={false} />
          <Message isMine={true} />
          <Message isMine={false} />
          <Message isMine={true} />
        </List>
      </CenterLayout>
      <ChatBox />
    </>
  )
}