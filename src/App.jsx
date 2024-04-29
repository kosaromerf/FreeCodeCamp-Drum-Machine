import { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Drum from "./Drum";

function App() {
  const [displayedId, setDisplayedId] = useState("");
  return (
    <div
      id="fullPage"
      className="d-flex justify-content-center align-items-center"
    >
      <Container id="drum-machine" className="">
        <Drum
          className="drum-pad"
          id="heater1"
          content="Q"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
        <Drum
          className="drum-pad"
          id="heater2"
          content="W"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        />
        <Drum
          className="drum-pad"
          id="heater3"
          content="E"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        />
        <div id="empty1"></div>
        <Drum
          className="drum-pad"
          id="heater4"
          content="A"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        />
        <Drum
          className="drum-pad"
          id="clap"
          content="S"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        />
        <Drum
          className="drum-pad"
          id="open-hh"
          content="D"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        />
        <div id="display">{displayedId}</div>
        <Drum
          className="drum-pad"
          id="kick-n-hat"
          content="Z"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        />
        <Drum
          className="drum-pad"
          id="kick"
          content="X"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        />
        <Drum
          className="drum-pad"
          id="closed-hh"
          content="C"
          setDisplayedId={setDisplayedId}
          link="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        />

        <div id="empty2"></div>
      </Container>
    </div>
  );
}

export default App;
