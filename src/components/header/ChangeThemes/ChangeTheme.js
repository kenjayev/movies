import React from "react";
import "./ChangeTheme.css";

class ChangeTheme extends React.Component {
  state = {
    isDarkMode: true,
  };

  changeTheme = () => {
    const newMode = !this.state.isDarkMode;
    this.setState({ isDarkMode: newMode });

    if (newMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  };

  render() {
    const { isDarkMode } = this.state;
    console.log(isDarkMode);
    return (
      <button className="ChangeTheme" onClick={this.changeTheme}>
        <ion-icon
          name={isDarkMode ? "sunny" : "moon"}
          class="dark-mode-button moon"
        ></ion-icon>
        {/* {isDarkMode ? "Light Mode" : "Dark Mode"} */}
      </button>
    );
  }
}

export default ChangeTheme;
