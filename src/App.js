import React from "react";
import PostList from "./posts/PostList";
import Youtube from "./youtube/Youtube";
import Navigator from "./Navigator";
import PageNotFound from "./PageNotFound";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch
  // Redirect
} from "react-router-dom";

function App() {
  // const supportsHistory = "pushState" in window.history;
  return (
    <div className="App">
      <Router>
        <Navigator />
        <Switch force>
          <Route path="/posts" component={PostList} />
          <Route path="/youtube" component={Youtube} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
