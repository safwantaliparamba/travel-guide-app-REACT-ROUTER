import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";
import NotFound from "./components/screens/NotFound";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import UserContext from "./components/context/User-Context";
import PrivateRoute from "./components/PrivateRoute";

function App(props) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return loading ? (
        <h1>loading</h1>
    ) : (
        <div>
            <UserContext>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Places} />
                        <Route path="/auth/login/" exact component={Login} />
                        <Route path="/auth/create/" exact component={Signup} />
                        <PrivateRoute
                            path="/place/:id"
                            exact
                            component={Place}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </UserContext>
        </div>
    );
}

export default App;
