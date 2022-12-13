import "./styles.css";
import React, { Component } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="wrapper" style={{ position: "relative" }}>
        <InfoWithHover />
        <TrendChartWithHover />
        <DailyChartWithHover />
      </div>
    </div>
  );
}

const InfoWithHover = withHover(Info);
const TrendChartWithHover = withHover(TrendChart);
const DailyChartWithHover = withHover(DailyChart);

function withHover(Component) {
  return class WithHover extends React.Component {
    state = { hovering: false };
    mouseOver = () => {
      if (!this.state.hovering) {
        this.setState({ hovering: true });
      }
    };
    mouseOut = () => {
      this.setState({ hovering: false });
    };
    render() {
      return (
        <div onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut}>
          <Component hovering={this.state.hovering} />
        </div>
      );
    }
  };
}

function Info({ hovering }) {
  return (
    <div>
      {hovering === true ? <Tooltip id="info" /> : null}
      <svg
        className="Icon-svg Icon--hoverable-svg"
        viewBox="0 0 16 16"
        width="50"
      >
        <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </div>
  );
}

function TrendChart({ hovering }) {
  return (
    <div className="squareIcon">
      {hovering === true ? <Tooltip id="TrendChart" /> : null}
    </div>
  );
}

function DailyChart({ hovering }) {
  return (
    <div className="squareIcon">
      {hovering === true ? <Tooltip id="DailyChart" /> : null}
    </div>
  );
}

class Tooltip extends Component {
  render() {
    return (
      <div className="toolTip" style={{ position: "absolute" }}>
        Вы навели мышь на элемент {this.props.id}
      </div>
    );
  }
}
