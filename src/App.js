//Import React for class component
import React from "react";
// Style import
import "./App.css";

// Layouts Import
import Header from "./layout/header/Header";
import Main from "./layout/Main";
import Footer from "./layout/footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
