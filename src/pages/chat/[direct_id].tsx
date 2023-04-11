import ChatBox from "@/component/chat/ChatBox";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarDirect";
import CenterList from "@/component/chat/CenterList";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/context/SocketContext";

export default function Chat() {
  const router = useRouter();
  const socket = useContext(SocketContext);

  const chatId = router.query.direct_id?.toString().replaceAll('"', "");
  const [messages, setMessages] = useState<any>({});

  useEffect(() => {
    const messageListener = (message: any) => {
      setMessages((prevMessages: any) => {
        const newMessages = { ...prevMessages };
        newMessages[message._id] = message;
        return newMessages;
      });
    };

    const indentifier = {
      type: "Direct",
      ownerId: "64339a88ede9b0fc8a482d45",
      chatId: chatId,
    };
    socket.on("get_messages_response", (res: any) => console.log(res.message));
    socket.on("message", messageListener);
    socket.emit("getMessages", indentifier);
  }, [socket]);

  return (
    <>
      <NavBar />
      <CenterList>
        {[...Object.values(messages)]
          .sort((a: any, b: any) => a.createdAt - b.createdAt)
          .map((message: any) => (
            <Message
              key={message._id}
              text={message.message}
              isMine={message.isOwner}
              type={"Group"}
            />
          ))}
      </CenterList>
      <ChatBox />
    </>
  );
}
