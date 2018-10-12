import React, { Component } from "react";

const AppContext = React.createContext();
const GlobalState = AppContext.Consumer;

class AppProvider extends Component {
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const App = ({ children }) => <AppProvider>{children}</AppProvider>;

export { App, AppProvider, AppContext, GlobalState };
