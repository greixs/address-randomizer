import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostDetail from "./PostDetail";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.didHandleRemove = this.didHandleRemove.bind(this);
    this.state = {
      postList: []
    };
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
        {postList.map((item, index) => {
          return (
            <div className="post-item">
              <PostDetail
                post={item}
                key={`post-list-key ${index}`}
                dataCallback={this.handleDataCallback}
                didHandleRemove={this.didHandleRemove}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
