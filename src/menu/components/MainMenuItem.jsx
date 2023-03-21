import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const MainMenuItem = ({ icon, title, url, functions }) => {
  const cardTitle = <><FontAwesomeIcon icon={icon} /> {title}</>
  return (
    <Link href={url}>
      <Card className="menu-item" title={cardTitle } bordered={false}>
        {functions.map((module) => {
          return(
            <p>{module}</p>
          );
        })}
      </Card>
    </Link>
  );
};
