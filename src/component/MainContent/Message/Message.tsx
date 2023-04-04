import Dialog from "@/component/common/Dialog";
import theme from "@/config/theme";
import useModal from "@/hook/useModal";
import { ChatType } from "@/type/Chat";
import { Avatar, Box, Button, ListItem, Stack, Typography } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import BubbleMessage from "./BubbleMessage";

type props = {
  isMine: boolean,
  avatar?: string,
  type: ChatType,
  senderName?: string
}

Message.defaultProps = {
  senderName: "Sender Name"
}

export default function Message({ ...props }: props) {
  const modal = useModal()

  return (
    <ListItem sx={{
      flexDirection: props.isMine ? "row-reverse" : "initial"
    }}>
      {props.type === "Group" &&
        <>
          <Button onClick={modal.onOpen}>
            <Avatar
              sx={{
                margin: props.isMine ?
                  `0 0 0 ${theme.spacing(2)}`
                  :
                  `0 ${theme.spacing(2)} 0 0`
              }} />
          </Button>
          <Dialog
            open={modal.open}
            onClose={modal.onClose}
            content={
              <>
                <Avatar sx={{ margin: "auto" }} />
                <Typography>some profile</Typography>
              </>
            }
            iconAction={[[<MessageIcon />, () => { }]]}
          />
        </>
      }
      <Stack>
        {props.type === "Group" && !props.isMine &&
          <Typography sx={{ paddingLeft: theme.spacing(2), paddingBottom: 0 }} variant="body2">{props.senderName}</Typography>
        }
        <BubbleMessage text={"test message"} isMine={props.isMine} />
      </Stack>
    </ListItem>
  )
}