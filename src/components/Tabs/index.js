import React from "react";
import { Tabs as T, Tab } from "./styled";

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1
    };
  }
  updateState = (key, val, callback) => {
    let state = this.state;
    state[key] = val;
    this.setState({
      state
    });
  };

  render() {
    return (
      <T
        activeKey={this.state.activeTab}
        onSelect={v => this.updateState("activeTab", v)}
        id="controlled-tab-example"
        unmountOnExit={true}
      >
        {this.props.tabs.map((tabObj, i) => (
          <Tab eventKey={i + 1} title={tabObj.title} key={i}>
            {tabObj.content}
          </Tab>
        ))}
      </T>
    );
  }
}

export default Tabs;
