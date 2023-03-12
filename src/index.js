import React from "react";
import icons from "./icons/icons";

const IconBlock = ({ name, options }) => {
  const requiredIcon = icons.find((icon) => {
    return icon.iconName === name;
  });
  if (!requiredIcon) return;
  const IconComponent = requiredIcon.iconSrc;
  IconComponent.defaultProps = {
    size: "50px",
    color: "#334155",
    stroke: "2",
  };
  return <IconComponent {...options} />;
};

export default IconBlock;
