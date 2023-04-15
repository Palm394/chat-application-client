import Dialog from "@/component/common/Dialog";
import theme from "@/config/theme";
import useModal from "@/hook/useModal";
import { ChatType } from "@/type/Chat";
import { Avatar, Button, ListItem, Stack, Typography } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import BubbleMessage from "./BubbleMessage";
import { useRouter } from "next/router";
import useLocalStorage from "@/hook/useLocalStorage";
import { User } from "@/type/User";

type props = {
  text: string,
  isMine: boolean,
  avatar?: string,
  type: ChatType,
  senderName?: string
}

Message.defaultProps = {
  senderName: "Sender Name",
  avatar: "https://avatars.githubusercontent.com/u/63848208?v=4"
}

export default function Message({ ...props }: props) {
  const [currentUser, setCurrentUser] = useLocalStorage<User>("user_data")
  const router = useRouter()
  const modal = useModal()

  return (
    <ListItem sx={{
      flexDirection: props.isMine ? "row-reverse" : "initial"
    }}>
      {props.type === "Group" &&
        <>
          <Button onClick={modal.onOpen}>
            <Avatar
              src={props.avatar}
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
                <Avatar sx={{ margin: "15px auto", width: 56, height: 56 }} />
                <Typography>{props.isMine ? currentUser.username : props.senderName}</Typography>
              </>
            }
            iconAction={!props.isMine ? [[<MessageIcon />, () => { router.push("/chat/1") }]] : null}
          />
        </>
      }
      <Stack>
        {props.type === "Group" && !props.isMine &&
          <Typography sx={{ paddingLeft: theme.spacing(2), paddingBottom: 0 }} variant="body2">{props.senderName}</Typography>
        }
        <BubbleMessage text={props.text} isMine={props.isMine} />
      </Stack>
    </ListItem>
  )
}