import React from "react";
import { Header, Button, Content } from "./ExpandAndCollapse";
import Calculator from "./Calculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./LoginLogout/Home";
import Login from "./LoginLogout/Login";
import Welcome from "./LoginLogout/Welcome";
import TodoApp from "./TodoApp";
import ListStudent from "./ListStudent";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    showContent: false,
  };

  handleClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div className="App">
        <>
          <Header />
          {this.state.showContent ? (
            <>
              <Button text="Đóng giới thiệu" onClick={this.handleClick} />
              <Content />
            </>
          ) : (
            <Button text="Xem giới thiệu" onClick={this.handleClick} />
          )}

          <Calculator />
        </>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home/:username" element={<Welcome />} />
            </Routes>
          </div>
        </Router>
        <TodoApp />
        <ListStudent />
      </div>
    );
  }
}

export default App;
