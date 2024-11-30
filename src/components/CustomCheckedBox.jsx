import React from "react";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";

const WhiteBackgroundCheckbox = styled(Checkbox)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    position: "relative",
    zIndex: 0,
    color: "#dc2626",
  },
  "&:not(.Mui-checked) .MuiSvgIcon-root::after": {
    content: '""',
    position: "absolute",
    left: 4,
    top: 4,
    height: 15,
    width: 15,
    backgroundColor: "white",
    zIndex: -1,
  },
}));

function CustomCheckedBox() {
  return (
    <div className="flex flex-row items-center">
      <WhiteBackgroundCheckbox />
      <span>Remember me</span>
    </div>
  );
}

export default CustomCheckedBox;
