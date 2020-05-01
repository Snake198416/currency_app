import React from 'react';
import './App.css';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cookie from "../Cookie/Cookie";
import Rate from "../Rate/Rate";
import About from "../About/About";
import Error from "../Error/Error";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            block: false,
        }
    }

    render() {
        let nav = this.props.nav;
        return (
            <Router>
                <div className="site">
                    <Header nav={nav}/>
                    <div
                        className="container">
                        <main>
                            <Switch>
                                <Route exact path='/' component={Rate}/>
                                <Route exact path='/about' component={About}/>
                                <Route exact path='/error' component={Error}/>
                            </Switch>
                        </main>
                    </div>
                    <Cookie/>
                    <Footer/>

                </div>
            </Router>
        );
    }
}

export default App;
