import React from "react";
import PostList from "./posts/PostList";
import Youtube from "./youtube/Youtube";
import Timer from "./timer/Timer";
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
  return (
    <div className="App">
      <Router>
        <Navigator />
        <Switch force>
          <Route path="/posts" component={PostList} />
          <Route
            path="/timer"
            component={props => <Timer {...props} startCount={5} />}
          />
          <Route path="/youtube" component={Youtube} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
