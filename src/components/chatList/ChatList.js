import React, { Component } from "react";
import "./chatList.css";

export default class ChatList extends Component {
  allChatUsers = [
     ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
       
      </div>
    );
  }
}
