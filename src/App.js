//Import React for class component
import React from "react";
// Style import
import "./App.css";

// Layouts Import
import Header from "./layout/header/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
