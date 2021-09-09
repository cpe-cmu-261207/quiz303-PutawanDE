import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Comment from "./components/Comment";
import Like from "./components/Like";

import { comments } from "./data/comments";

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">
        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">
          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="/profileImages/putawan.jpeg"
            ></img>
            <span className="font-semibold text-lg">
              Tanadol Deachprapakorn 630610734
            </span>
          </div>

          {/* status message */}
          <p>Quiz ง่ายจริง #261207</p>
          {/* Like Section */}
          <Like likeNum={202} />
        </div>

        {/* Comments and Replies */}
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default App;
