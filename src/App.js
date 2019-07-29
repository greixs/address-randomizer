import React from "react";
import PostList from "./posts/PostList";
import Youtube from "./youtube/Youtube";
import Navigator from "./Navigator";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigator />

      <PostList />
      {/* <Youtube /> */}
    </div>
  );
}

export default App;
