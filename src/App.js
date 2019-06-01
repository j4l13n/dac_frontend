import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import Subscribers from './views/Subscribers/Subscribers';
import Trees from './views/Trees/Trees';
import Calls from './views/Calls/Calls';
import Responses from './views/Responses/Responses';
import Messages from './views/Messages/Messages';
import Settings from './views/Settings/Settings';
import AddSubscriber from './views/Subscribers/AddSubscriber'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/subscribers" component={Subscribers} />
      <Route exact path="/trees" component={Trees} />
      <Route exact path="/calls" component={Calls} />
      <Route exact path="/responses" component={Responses} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/add-subscriber" component={AddSubscriber} />
    </Router>
  );
}

export default App;
