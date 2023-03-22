import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const MainMenuItem = ({ icon, title, url, functions }) => {
  const cardTitle = (
    <>
      <FontAwesomeIcon icon={icon} />
      <div className="card-title-text">
        <h4>{title}</h4>
        <p>Fast access</p>
      </div>
    </>
  );
  return (
    <Link to={url}>
      <Card className="menu-item" title={cardTitle} bordered={false}>
        {functions.map((module, index) => {
          return (
            <div className="functionality-container" key={index}>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>{module}</p>
            </div>
          );
        })}
      </Card>
    </Link>
  );
};
