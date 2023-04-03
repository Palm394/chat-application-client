import { List } from "@mui/material";
import SingleChatList from "./SingleChatList";

export default function ListSelection() {
  return (
    <List>
      <SingleChatList />
      <SingleChatList />
      <SingleChatList />
      <SingleChatList />
      <SingleChatList />
    </List>
  )
}