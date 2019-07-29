import React, { Component } from "react";
import PostData from "../data/posts.json";

export default class postList extends Component {
  render() {
    return (
      <div>
        <h1>Hello there</h1>
        {PostData.map((postDetail, index) => {
          return <h1>{postDetail.title}</h1>;
        })}
      </div>
    );
  }
}
