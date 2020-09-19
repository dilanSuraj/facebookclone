import React from 'react';
import LoginSignupViewComponent from './views/loginSignupView';
import TimelineViewComponent from './views/timelineView';
import MessengerComponent from './views/messengerView';
import Page404 from './views/Page404';
import ProfileComponent from './views/profileView';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './assets/css/bootstrap.css';
//import './assets/css/profile.main.min.css'
import './assets/css/profile.style.css'
import './assets/css/profile.color.css'
import './assets/css/profile.responsive.css'
import './assets/css/style.css'
import './assets/css/owl.theme.default.css'
import './assets/css/owl.carousel.min.css'
import './App.css'
import LoaderComponent from './shared/loader';
import { ProtectedRoute } from './utils/protected.route';

const loading = () => {
  return (<LoaderComponent />)
}


function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>

          <ProtectedRoute path="/home" name="Timeline" component={TimelineViewComponent} />
          <Route path="/auth" name="Login Signup View" component={LoginSignupViewComponent} />
          <ProtectedRoute path="/messenger" name="Messenger" component={MessengerComponent} />
          <ProtectedRoute path="/profile" name="Profile" component={ProfileComponent} />
          <Route path="404" name="404" component={Page404} />
          <ProtectedRoute exact path="/" name="Timeline" component={TimelineViewComponent} />
          <Route path='*' exact={true} component={Page404} />
        </Switch>
      </React.Suspense>
    </BrowserRouter >
  );
}

export default App;
