import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddStuff from './components/AddStuff/AddStuff';
import Booking from './components/Booking/Booking/Booking';
import AllBookings from './components/AllBookings/AllBookings/AllBookings';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Feedback from './components/Feedback/Feedback';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/booking">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allBookings">
            <AllBookings></AllBookings>
          </PrivateRoute>
          <Route path="/feedback">
            <Feedback></Feedback>
          </Route>
          <Route path="/addStuff">
            <AddStuff></AddStuff>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
