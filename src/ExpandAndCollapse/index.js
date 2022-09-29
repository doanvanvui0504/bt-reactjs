import React from "react";
import "./ExpandAndCollapse.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h3>Conditional Rendering</h3>
      </div>
    );
  }
}

export class Button extends React.Component {
  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <h4>Giới thiệu</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    );
  }
}
