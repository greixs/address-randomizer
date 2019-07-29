import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostDetail from "./PostDetail";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.didHandleRemove = this.didHandleRemove.bind(this);
    this.reverseOrder = this.reverseOrder.bind(this);
    this.state = {
      postList: []
    };
  }

  reverseOrder() {
    this.setState({
      postList: this.state.postList.reverse()
    });
    console.log(this.state.postList);
  }

  handleDataCallback(postItem) {
    console.log(postItem);
    let currentPostList = this.state.postList;
    currentPostList.push(postItem);
    this.setState({
      postList: currentPostList
    });
  }

  didHandleRemove(postItem) {
    const newPostList = this.state.postList.filter(
      item => item.id !== postItem
    );
    this.setState({
      postList: newPostList
    });
  }

  componentDidMount() {
    this.setState({
      postList: PostData
    });
  }

  render() {
    const { postList } = this.state;
    return (
      <div>
        <button className="btn" onClick={this.reverseOrder}> Reverse Order </button>
        {postList.map((item, index) => {
          return (
            <PostDetail
              post={item}
              key={`post-list-key ${item.id}`}
              dataCallback={this.handleDataCallback}
              didHandleRemove={this.didHandleRemove}
            />
          );
        })}
      </div>
    );
  }
}
