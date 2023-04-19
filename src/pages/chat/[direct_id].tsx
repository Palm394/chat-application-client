import ChatBox from "@/component/chat/ChatBox";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarDirect";
import CenterList from "@/component/chat/CenterList";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/context/SocketContext";
import useLocalStorage from "@/hook/useLocalStorage";
import { User } from "@/type/User";
import { DEFAULT_CURRENT_USER, SOCKET_MESSAGE } from "@/type/Constant";
import { MessageSocketType, ResType } from "@/type/Socket";

export default function Chat() {
  const router = useRouter();
  const socket = useContext(SocketContext);
  const [currentUser, _] = useLocalStorage<User>("user_data");

  const chatId = router.query.direct_id?.toString().replaceAll('"', "");
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<{ [key: string]: MessageSocketType }>({});

  useEffect(() => {
    if (JSON.stringify(currentUser) === JSON.stringify(DEFAULT_CURRENT_USER)) {
      router.push("/login");
      return;
    }

    if (chatId) {
      getMessages();
      getUserInformation();
    }
  }, [socket, currentUser, router]);

  function getMessages() {
    const messageListener = (message: MessageSocketType) => {
      setMessages((prevMessages: { [key: string]: MessageSocketType }) => {
        const newMessages = { ...prevMessages };
        newMessages[message._id] = message;
        return newMessages;
      });
    };

    const identifier = {
      type: "Direct",
      ownerId: currentUser.userId,
      chatId: chatId,
    };
    socket.on("get_messages_response", (res: ResType) =>
      console.log("Get Messages Status:", res.message)
    );
    socket.on("message", messageListener);
    socket.emit("getMessages", identifier);
  }

  function getUserInformation() {
    const ids = {
      myUserId: currentUser.userId,
      chatId: chatId,
    };
    socket.on("get_user_by_chat_id_response", (res: ResType) => {
      console.log("Get User Information", res.message);
      if (res.message === SOCKET_MESSAGE.SUCCESS) {
        setUser({
          username: res.username ? res.username : "",
          userId: res.userId ? res.userId : "",
          profileImage: res.profileImage ? res.profileImage : "",
        });
        socket.off("get_messages_response");
      }
    });
    socket.emit("getUserByChatId", ids);
  }

  return (
    <>
      <NavBar
        label={user?.username}
        chatId={chatId}
      />
      <CenterList>
        {[...Object.values(messages)]
          .sort(
            (a: MessageSocketType, b: MessageSocketType) =>
              a.createdAt.valueOf() - b.createdAt.valueOf()
          )
          .map((message: MessageSocketType) => (
            <Message
              key={message._id}
              id={message._id}
              text={message.message}
              isMine={message.isOwner}
              avatar={message.profileImage}
              type={"Direct"}
              senderName={message.username}
              isLiked={message.isLiked}
              totalLiked={message.like}
            />
          ))}
      </CenterList>
      <ChatBox chatType="Direct" id={chatId} />
    </>
  );
}
