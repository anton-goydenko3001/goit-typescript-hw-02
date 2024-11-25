import React from "react";
import style from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => (
  <p className={style.errorMessage}>Something went wrong, try again...</p>
);

export default ErrorMessage;
