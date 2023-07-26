import { Icon, IconWeight } from "@phosphor-icons/react";
import { DetailContainer } from "./styles";
import React, { ReactNode } from "react";

interface DetailWithIconProps {
  icon: Icon;
  iconColor: "purple" | "yellow" | "dark-yellow" | "dark-gray";
  weight?: IconWeight;
  children: ReactNode;
}

export function DetailWithIcon({ icon, iconColor, weight = "bold", children }:DetailWithIconProps) {
  return (
    <DetailContainer>
      <div className={`icon ${iconColor}`}>
        {React.createElement(icon, { size: 16, weight }) }
      </div>
      { children }
    </DetailContainer>
  );
}