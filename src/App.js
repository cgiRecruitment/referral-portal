import React from 'react';
import {Route, HashRouter} from "react-router-dom";
import Dashboard from './components/Dashboard'
import ViewProfiles from './containers/viewProfiles'
import AddProfile from './containers/addProfile'
import Calender from './containers/calender'
import Header from "./components/Header";

class App extends React.Component {

    componentWillMount() {
        fetch("api/profiles.json").then(data => data.json()).then(response => {
            this.props.setProfiles(response)
        })
        const availability = [
                {
                    "name": "Mirella",
                    "schedule": [
                        {
                            "date": "12-04-2019",
                            "from": "09:00",
                            "to": "11:00",

                        },
                        {
                            "date": "17-04-2019",
                            "from": "11:00",
                            "to": "13:00",

                        }
                    ]
                },
                {
                    "name": "Ruben",
                    "schedule": [
                        {
                            "date": "13-04-2019",
                            "from": "11:00",
                            "to": "13:00",

                        },
                        {
                            "date": "19-04-2019",
                            "from": "15:00",
                            "to": "17:00",

                        }
                    ]
                }
            ]
        this.props.storeAvailabilityOverview(availability)
    }


    render() {
        return (
            <React.Fragment>
                <Header/>
                <HashRouter>
                    <Route path="/" exact render={() => (<Dashboard profiles={this.props.profiles}/>)}/>
                    <Route exact path="/profiles/" render={() => (<ViewProfiles/>)}/>
                    <Route exact path="/add-profile/" render={() => (<AddProfile/>)}/>
                    <Route exact path="/calender/" render={() => (<Calender/>)}/>
                </HashRouter>
            </React.Fragment>

        );
    }
}

export default App;
