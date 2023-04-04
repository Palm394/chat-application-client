import Chat from "@/component/chat/Chat";
import NavBar from "@/component/navbar/NavBar";
import CreateGroup from "@/component/group/CreateGroup";
import CenterList from "@/component/chat/CenterList";
import { Collapse, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";
import theme from "@/config/theme";

export default function Home() {
  const [openCollapseClient, setOpenCollapseClient] = useState<boolean>(false)
  const [openCollapseServer, setOpenCollapseServer] = useState<boolean>(false)

  function onClickCollapseClient(): void {
    setOpenCollapseClient(!openCollapseClient)
  }

  function onClickCollapseServer(): void {
    setOpenCollapseServer(!openCollapseServer)
  }

  return (
    <>
      <NavBar />
      <CenterList>
        <ListItemButton sx={{ minHeight: "56px", backgroundColor: theme.palette.primary.main }} onClick={onClickCollapseClient}>
          <Typography>Clients ()</Typography>
        </ListItemButton>
        <Collapse in={openCollapseClient}>
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/1" label="client1" type="1-1" />
          <Chat href="/chat/1" label="client1" type="1-1" />
        </Collapse >
        <ListItemButton sx={{ minHeight: "56px", backgroundColor: theme.palette.primary.main }} onClick={onClickCollapseServer}>
          <Typography>Groups ()</Typography>
        </ListItemButton>
        <Collapse in={openCollapseServer}>
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