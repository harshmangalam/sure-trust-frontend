import React, { Component } from "react";

class JitsiRecordingStudent extends Component {
  domain = "meet.jit.si";

  api = {};

  constructor(props) {
    super(props);
    this.state = {
      room: localStorage.getItem("MeetCodeStudent"),
      user: {
        name: localStorage.getItem("MeetNameStudent"),
        Email: "jhbdhjbdshd",
      },
      isAudioMuted: true,
      isVideoMuted: true,
    };
  }

  startMeet = () => {
    const options = {
      roomName: this.state.room,
      height: "100%",
      width: "100%",

      configOverwrite: {
        prejoinPageEnabled: false,
        startWithVideoMuted: true,
        startWithAudioMuted: true,
        remoteVideoMenu: {
          disableKick: true,
        },
        disableRemoteMute: true,
        enableLipSync: false,
      },
      interfaceConfigOverwrite: {
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,

        TOOLBAR_BUTTONS: [
          "camera",
          "microphone",
          "hangup",
          "desktop",
          "profile",
          "chat",
          "videoquality",
          "tileview",
          "select-background",
          "help",
          "raisehand",
          "closedcaptions",
          "participants",
        ],
      },
      parentNode: document.querySelector("#jitsi-iframe"),
      userInfo: {
        displayName: this.state.user.name,
      },
    };
    this.api = new window.JitsiMeetExternalAPI(this.domain, options);

    this.api.addEventListeners({
      videoConferenceLeft: this.handleVideoConferenceLeft,
    });
    this.api.executeCommand("subject", "Sure Trust");
  };

  handleVideoConferenceLeft = () => {
    console.log("handleVideoConferenceLeft");
    localStorage.removeItem("MeetCodeStudent");
    localStorage.removeItem("MeetNameStudent");
    window.close();
  };

  componentDidMount() {
    if (window.JitsiMeetExternalAPI) {
      this.startMeet();
    } else {
      alert("JitsiMeetExternalAPI not loaded");
    }
  }

  render() {
    console.log("loader", this.state.loader);
    return (
      <React.Fragment>
        <div id="jitsi-iframe" style={{ height: "100vh" }}></div>
      </React.Fragment>
    );
  }
}

export default JitsiRecordingStudent;
