import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostDetail from "./PostDetail";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      orderOldestFirst: false
    };
  }

  orderByDate = () => {
    if (!this.state.orderOldestFirst) {
      this.setState({
        orderOldestFirst: !this.state.orderOldestFirst,
        postList: this.state.postList.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )
      });
    } else {
      this.setState({
        orderOldestFirst: !this.state.orderOldestFirst,
        postList: this.state.postList.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        )
      });
    }
  };

  reverseOrder = () => {
    this.setState({
      postList: this.state.postList.reverse()
    });
  };

  handleDataCallback = postItem => {
    console.log(postItem);
    let currentPostList = this.state.postList;
    currentPostList.push(postItem);
    this.setState({
      postList: currentPostList
    });
  };

  didHandleRemove = postItem => {
    const newPostList = this.state.postList.filter(
      item => item.id !== postItem
    );
    this.setState({
      postList: newPostList
    });
  };

  componentDidMount() {
    this.setState({
      postList: PostData
    });
  }

  render() {
    const { postList } = this.state;
    const { AlertBox } = this.props;
    return (
      <div>
        <AlertBox>This is a test</AlertBox>
        <button className="btn" onClick={this.reverseOrder}>
          Reverse Order
        </button>
        <button className="btn" onClick={this.orderByDate}>
          Order By Date
        </button>
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
