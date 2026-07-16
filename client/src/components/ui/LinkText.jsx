import React from "react";

const LinkText = ({ label, ...rest }) => {
  return <a {...rest} className="text-indigo-400 font-medium hover:underline hover:cursor-pointer">{label}</a>;
};

export default LinkText;
