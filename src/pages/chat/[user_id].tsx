import ChatBox from "@/component/chat/ChatBox";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/NavBar/NavBarOneToOne";
import CenterList from "@/component/chat/CenterList";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/context/socket";
import router from "next/router";

export default function Chat() {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<any>({});

  useEffect(() => {
    const messageListener = (message: any) => {
      setMessages((prevMessages: any) => {
        const newMessages = { ...prevMessages };
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    console.log(router.query.user_id);

    socket.emit("joinRoom", { username: "khar", room: `room ${router.query.user_id}` });

    socket.on("message", messageListener);
    socket.emit("getMessages");

    console.log(messages);
  }, [socket]);

  return (
    <>
      <NavBar />
      <CenterList>
        {[...Object.values(messages)]
          .sort((a: any, b: any) => a.time - b.time)
          .map((message: any, index: any) => (
            <Message key={index} text={message.value} type={"1-1"} isMine={true} />
          ))}
      </CenterList>
      <ChatBox />
    </>
  );
}
