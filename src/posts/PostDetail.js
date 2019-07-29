import React, { Component } from "react";

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.removeContent = this.removeContent.bind(this);
    this.state = {
      showContent: true,
      postItem: null
    };
  }

  titleWasClicked(event) {
    event.preventDefault();
    let newPostItem = this.props.post;
    newPostItem["title"] = "new title";
    this.setState({
      postItem: newPostItem
    });
    const { dataCallback } = this.props;
    dataCallback(newPostItem);
  }

  toggleContent(event) {
    event.preventDefault();
    this.setState({
      showContent: !this.state.showContent
    });
  }

  removeContent() {
    if (this.props.didHandleRemove) {
      this.props.didHandleRemove(this.props.post);
    }
  }

  setStateOnProps() {
    this.setState({
      postItem: this.props.post
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      this.setStateOnProps();
    }
  }

  componentDidMount() {
    this.setStateOnProps();
  }

  render() {
    const { postItem } = this.state;
    const { showContent } = this.state;
    return (
      <div>
        {this.state.postItem !== null ? (
          <div className="post-details">
            <h1 onClick={this.titleWasClicked}>{postItem.title}</h1>
            {showContent === true ? <p>{postItem.content}</p> : ""}
            <button className="btn" onClick={this.toggleContent}>
              Toggle Content Display
            </button>
            <button
              className="btn"
              onClick={() => this.props.didHandleRemove(postItem.id)}
            >
              Remove Content Display
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
