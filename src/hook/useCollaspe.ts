import { useState } from "react";

export default function useCollaspe() {
  const [open, setOpen] = useState<boolean>(true);

  function onClick(): void {
    setOpen(!open);
  }

  return {
    open: open,
    onClick: onClick,
  };
}
