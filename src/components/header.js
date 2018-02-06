import React from "react";

export const Header = props => {
  return (
    <div className="header">
      <h1 className="header__title" >{props.title}</h1>
      {props.subTitle && <p className="header__subtitle">{props.subTitle}</p>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};
