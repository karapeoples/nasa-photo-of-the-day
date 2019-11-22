import React from "react";
import "./App.css";
import Nasa from './components/Nasa'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCopyright  } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCopyright)

function App() {
  return (
    <div className="App">
      <p>
        <Nasa />
      </p>
    </div>
  );
}

export default App;
