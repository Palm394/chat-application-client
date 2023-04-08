import ChatBox from "@/component/chat/ChatBox";
import CenterList from "@/component/chat/CenterList";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarGroup";
import { SocketContext } from "@/context/socket";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function GroupChat() {
  const router = useRouter();
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<any>({});
  var group_id = router.query.group_id?.toString().replaceAll('"', "");

  useEffect(() => {
    if (router.query.group_id) {
      const messageListener = (message: any) => {
        setMessages((prevMessages: any) => {
          const newMessages = { ...prevMessages };
          newMessages[message._id] = message;
          return newMessages;
        });
      };
      socket.on("message", messageListener);
      socket.emit("getMessages", group_id);

      console.log(group_id);
    }
  }, [socket, router.query.group_id]);

  return (
    <>
      <NavBar />
      <CenterList>
        {[...Object.values(messages)]
          .sort((a: any, b: any) => a.time - b.time)
          .map((message: any, index: any) => (
            <Message key={message._id} text={message.message} type={"Group"} isMine={true} />
          ))}
      </CenterList>
      <ChatBox chatId={group_id} />
    </>
  );
}
