import List from "@/component/common/List";
import withFullHeight from "@/hoc/Layout/withFullHeight";

type props = {
  children: JSX.Element[]
}

function ChatList(props: props) {
  return (
    <List>
      {props.children}
    </List>
  )
}

export default withFullHeight(ChatList)