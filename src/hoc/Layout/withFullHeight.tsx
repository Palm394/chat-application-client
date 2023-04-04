import { Box } from "@mui/material";
import { ComponentType } from "react";

export default function withFullHeight<T>(WrapperComponent: ComponentType<T>) {
  const withFullHeight = (props: any) => {
    return (
      <Box sx={{ flex: 1 }}>
        <WrapperComponent {...props} />
      </Box>
    )
  }
  return withFullHeight
}