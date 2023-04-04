import Chat from "@/component/chat/Chat";
import NavBar from "@/component/navbar/NavBar";
import CreateGroup from "@/component/group/CreateGroup";
import CenterList from "@/component/chat/CenterList";
import { Collapse, ListItemButton, Typography } from "@mui/material";
import theme from "@/config/theme";
import useCollaspe from "@/hook/useCollaspe";

export default function Home() {
  const collaspeClient = useCollaspe()
  const collaspeServer = useCollaspe()

  return (
    <>
      <NavBar />
      <CenterList>
        <ListItemButton sx={{ minHeight: "56px", backgroundColor: theme.palette.primary.main }} onClick={collaspeClient.onClick}>
          <Typography>Clients (0)</Typography>
        </ListItemButton>
        <Collapse in={collaspeClient.open}>
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/1" label="client1" type="1-1" />
        </Collapse >
        <ListItemButton sx={{ minHeight: "56px", backgroundColor: theme.palette.primary.main }} onClick={collaspeServer.onClick}>
          <Typography>Groups (0)</Typography>
        </ListItemButton>
        <Collapse in={collaspeServer.open}>
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
          <Chat href="/group_chat/1" label="client1" type="Group" />
        </Collapse>
      </CenterList >
      <CreateGroup />
    </>
  )
}