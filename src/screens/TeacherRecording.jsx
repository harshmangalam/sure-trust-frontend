import React, { Component } from "react";

class JitsiRecordingTeacher extends Component {
  domain = "meet.jit.si";
  api = {};

  constructor(props) {
    super(props);
    this.state = {
      room: localStorage.getItem("MeetCodeTeacher"),
      user: {
        name: localStorage.getItem("MeetNameTeacher"),
      },
    };
  }

  startMeet = () => {
    const options = {
      roomName: this.state.room,
      width: "100%",
      height: "100%",
      configOverwrite: {
        prejoinPageEnabled: false,
        startWithVideoMuted: true,
        startWithAudioMuted: true,
      },
      interfaceConfigOverwrite: {
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
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
    localStorage.removeItem("MeetCodeTeacher");
    localStorage.removeItem("MeetNameTeacher");
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
    return <div id="jitsi-iframe" style={{ height: "100vh" }}></div>;
  }
}

export default JitsiRecordingTeacher;
