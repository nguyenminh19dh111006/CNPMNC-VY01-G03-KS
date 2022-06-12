import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Logout from "./Components/Logout/";
import Search from "./Components/Search";
import "aos/dist/aos.css";
import Partner from "./Components/Partner";
import Hotel from "./Components/Hotel";
import Payment from "./Components/Payment";
import PaymentFinish from "./Components/PaymentFinish";
import Partners from "./Components/Partners";
function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/search"  component={Search}/>
                    <Route exact path="/partner" component={Partner}/>
                    <Route exact path="/hotel" component={Hotel}/>
                    <Route exact path="/payment" component={Payment}/>
                    <Route exact path="/paymentfinish" component={PaymentFinish}/>
                    <Route exact path="/partners" component={Partners}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
