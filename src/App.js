import './App.css';
import './index.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  const [mode, setMode] = useState("light");

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'black';
      showAlert("Dark Mode has been enabled.", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled.", "success");
    }

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <Textform heading="Enter a text below to analyze - " mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
        </Router>
      </>
      );
}

      export default App;
