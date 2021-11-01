import React ,{Fragment,useState,Children} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";



const Moles = ({ children }) => <div>{children}</div>
const Mole = () => <button>Mole</button>
const Timer = () => <div>Time: 00:00</div>
const Score = () => <div>Score: 0</div>

const Game = () => (

  const [playing, setPlaying] = useState<boolean>(false);
  
  return (
    <Fragment>
      {!playing && <h1>Whac-A-Mole</h1>}
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Stop" : "Start"}
      </button>
      {playing && (
        <Fragment>
          <Score />
          <Timer />
          <Moles>
            <Mole />
            <Mole />
            <Mole />
            <Mole />
            <Mole />
          </Moles>
        </Fragment>
      )}
    </Fragment>
  );
  


ReactDOM.render(<Game/>, document.getElementById('root'))


// ReactDOM.render(<App />, document.getElementById("root"));
