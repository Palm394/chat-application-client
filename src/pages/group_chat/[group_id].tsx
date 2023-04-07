import ChatBox from "@/component/chat/ChatBox";
import CenterList from "@/component/chat/CenterList";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/NavBar/NavBarGroup";
import { SocketContext } from "@/context/socket";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function GroupChat() {
  const router = useRouter();
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<any>({});

  useEffect(() => {
    if (router.query.group_id) {
      const messageListener = (message: any) => {
        setMessages((prevMessages: any) => {
          const newMessages = { ...prevMessages };
          newMessages[message.id] = message;
          return newMessages;
        });
      };

      socket.on("message", messageListener);
      socket.emit("getMessages", router.query.group_id);

      console.log(router.query.group_id);
    }
  }, [socket, router.query.group_id]);

  return (
    <>
      <NavBar />
      <CenterList>
        {[...Object.values(messages)]
          .sort((a: any, b: any) => a.time - b.time)
          .map((message: any, index: any) => (
            <Message key={index} text={message.message} type={"Group"} isMine={true} />
          ))}
      </CenterList>
      <ChatBox />
    </>
  );
}
