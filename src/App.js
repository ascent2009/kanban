import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: 0,
      finishedTasks: 0,
    };
  }

  activeCounter = (value) => {
    this.setState({
      tasks: value,
    });
  };

  minusActiveCounter = (value) => {
    this.setState({
      tasks: value,
    });
  };

  finishedCounter = (value) => {
    this.setState({
      finishedTasks: value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Awesome Kanban Board</h1>
          <Header />
        </header>

        <Main
          active={this.activeCounter}
          minusActive={this.minusActiveCounter}
          finished={this.finishedCounter}
        />

        <Footer
          activeTasks={this.state.tasks}
          finishedTasks={this.state.finishedTasks}
        />
      </div>
    );
  }
}

export default App;
