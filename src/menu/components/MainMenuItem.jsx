import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const MainMenuItem = ({ icon, title, url }) => {
  return (
    <Link href={url}>
      <Card className="menu-item">
        <FontAwesomeIcon icon={icon} />
        <p>{title}</p>
      </Card>
    </Link>
  );
};
