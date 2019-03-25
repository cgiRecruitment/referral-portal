import React from 'react';
import { Route, HashRouter} from "react-router-dom";
import Dashboard from './components/Dashboard'
import ViewProfiles from './containers/viewProfiles'
import Header from "./components/Header";
import Container from "react-bootstrap/Container";

class App extends React.Component {

    componentWillMount() {
        fetch("api/profiles.json").then(data => data.json()).then(response => {
            this.props.setProfiles(response)
        })
    }


    render() {
        return (
            <Container>
                <Header/>
                <HashRouter>
                    <Route path="/" exact render={() => (<Dashboard profiles={this.props.profiles}/>)}/>
                    <Route exact path="/profiles/" render={() => (<ViewProfiles />)}/>
                </HashRouter>
            </Container>

        );
    }
}

export default App;
