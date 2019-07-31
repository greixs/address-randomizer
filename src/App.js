import React from "react";
// import PostList from "./posts/PostList";
// import { AlertBox } from "./posts/Wrapper";
// import Timer from "./timer/Timer";
import Form from "./form/Form";
import Randomizer from "./randomizer/Randomizer";
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
  return (
    <div className="App">
      <Router>
        <Navigator />

        <Switch force>
          <Route path="/randomizer" component={Randomizer} />
          <Route path="/youtube" component={Youtube} />
          {/* <Route
            path="/posts"
            component={props => <PostList {...props} AlertBox={AlertBox} />}
          />
          <Route
            path="/timer"
            component={props => <Timer {...props} startCount={5} />}
          /> */}
          <Route path="/form" component={Form} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
