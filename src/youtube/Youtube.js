import React from "react";
import YouTube from "react-youtube";

export default class Example extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.startVideo();
  }
  render() {
    const opts = {
      height: "800",
      width: "1240",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
        <h3>Here is Jalal's prank to make your day</h3>
        <YouTube videoId="vsmcEuVPlOQ" opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}
