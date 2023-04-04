import { Typography, styled } from "@mui/material"

type props = {
  text: string,
  isMine: boolean
}

export default function BubbleMessage({ ...props }: props) {
  const CSSmessage = styled(Typography)`
    background-color: ${props.isMine ? "#FFFFFF" : "#278EFF"} ;
    color: ${props.isMine ? "#000000" : "#FFFFFF"};
    padding: 10px 14px;
    border-radius: 20px;
  `

  return (
    <CSSmessage>{props.text}</CSSmessage>
  )
}