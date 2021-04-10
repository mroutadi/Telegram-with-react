import "./styles/style.scss";
import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import MicRoundedIcon from "@material-ui/icons/MicRounded";

const MessageInput = ({ value, onChange, btnOnClick }) => {
  const [selfValue, setSelfValue] = useState(value);
  useEffect(() => {
    setSelfValue(value)
  }, [value])
  const handleSubmit = (val) => {
    if (!val) return;
    btnOnClick(val);
  };

  return (
    <div className="root">
      <div className="input">
        <input
          className="searchInput"
          type="text"
          value={selfValue}
          onChange={(e) => {
            onChange(e.target.value)
            setSelfValue(e.target.value)
          }}
          placeholder="Write a message..."
        />
      </div>
      <div>
        <IconButton className="button" onClick={() => handleSubmit(selfValue)}>
          {selfValue ? <SendRoundedIcon /> : <MicRoundedIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default MessageInput;
