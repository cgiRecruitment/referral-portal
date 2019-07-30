import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
class ReDirect extends React.Component {
  componentWillMount() {
    this.props.getProfiles();
    this.props.getInterviews();
    this.props.getStatusList();
    this.props.getSkillSetList();
  }
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Route
            path="/"
            exact
            render={() => (
              <Dashboard
                profiles={this.props.activeProfiles}
                statusList={this.props.statusList}
                stats={this.props.stats}
                createComment={this.props.createComment}
                skillSets={this.props.skillSets}
                updateProfile={this.props.updateProfile}
                getFileDownloadLink={this.props.getFileDownloadLink}
              />
            )}
          />
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default ReDirect;
