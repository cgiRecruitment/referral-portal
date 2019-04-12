import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ViewProfiles from "./containers/viewProfiles";
import AddProfile from "./containers/addProfile";
import Calender from "./containers/calender";
import Header from "./components/Header";

class App extends React.Component {
  componentWillMount() {
    this.props.getProfiles();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <HashRouter>
          <Route
            path="/"
            exact
            render={() => <Dashboard profiles={this.props.profiles} />}
          />
          <Route exact path="/profiles/" render={() => <ViewProfiles />} />
          <Route exact path="/add-profile/" render={() => <AddProfile />} />
          <Route exact path="/calender/" render={() => <Calender />} />
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
