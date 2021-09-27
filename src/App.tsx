import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from  "./pages/About";
import Home from "./pages/Home";
import Callback from "./auth/Callback";
import Logout from "./auth/Logout"
import Users from "./pages/Users";


const App = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
             <li>
              <Link to="/logout">Logout</Link>
            </li>
             <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
            <a href="http://localhost:8100/oauth/authorize?client_id=1841c34d-b8bc-4684-8ccb-fc3d2d638e8f&code_challenge=QQmKP3Tf7cRiFi9pW0mraRCCDKvZSPT5Ww1kyxuK5XQ&code_challenge_method=S256&redirect_uri=http://localhost:3000/callback&response_type=code&scope=&state=IIp9zyjMXJZeJin55t5ZFK0UqdMhVk3wGdZegdwL">
              Login
            </ a>


            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/callback" component={Callback}>
          </Route>
          <Route path="/logout" component={Logout}>
          </Route>
          <Route path="/users" component={Users}>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
