import ChatBox from "@/component/chat/ChatBox";
import CenterList from "@/component/chat/CenterList";
import Message from "@/component/chat/message/Message";
import NavBar from "@/component/navbar/NavBarGroup";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/context/SocketContext";
import { useRouter } from "next/router";
import useLocalStorage from "@/hook/useLocalStorage";
import { User } from "@/type/User";
import { GroupSocketType, MessageSocketType, ResType } from "@/type/Socket";
import { DEFAULT_CURRENT_USER } from "@/type/Constant";

export default function GroupChat() {
  const router = useRouter();
  const socket = useContext(SocketContext);
  const [currentUser, _] = useLocalStorage<User>("user_data");

  const chatId = router.query.group_id?.toString().replaceAll('"', "");
  const [messages, setMessages] = useState<{ [key: string]: MessageSocketType }>({});
  const [groupName, setGroupName] = useState<string>("");

  function getMessages() {
    const messageListener = (message: MessageSocketType) => {
      setMessages((prevMessages: { [key: string]: MessageSocketType }) => {
        const newMessages = { ...prevMessages };
        newMessages[message._id] = message;
        return newMessages;
      });
    };

    const identifier = {
      type: "Group",
      ownerId: currentUser.userId,
      chatId: chatId,
    };

    socket.on("get_messages_response", (res: ResType) => console.log(res.message));
    socket.on("message", messageListener);
    socket.emit("getMessages", identifier);
  }

  function getGroupInformation() {
    const groupListener = (group: GroupSocketType) => {
      setGroupName(group.name);
    };

    socket.on("group", groupListener);
    socket.on("get_group_by_id_response", (res: ResType) => console.log(res.message));
    socket.emit("getGroupById", chatId);
  }

  useEffect(() => {
    if (JSON.stringify(currentUser) === JSON.stringify(DEFAULT_CURRENT_USER)) {
      router.push("/login");
      return;
    }

    if (chatId) {
      getMessages();
      getGroupInformation();
    }
  }, [socket, router]);

  return (
    <>
      <NavBar label={groupName} />
      <CenterList>
        {[...Object.values(messages)]
          .sort(
            (a: MessageSocketType, b: MessageSocketType) =>
              a.createdAt.valueOf() - b.createdAt.valueOf()
          )
          .map((message: MessageSocketType) => (
            <Message
              key={message._id}
              text={message.message}
              isMine={message.isOwner}
              type={"Group"}
              senderName={message.username}
              isLiked={message.isLiked}
              totalLiked={message.like}
            />
          ))}
      </CenterList>
      <ChatBox chatType="Group" id={chatId} />
    </>
  );
}
