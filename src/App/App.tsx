import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { appRoutes } from './routes';
import { Header, Footer } from './components';

import GlobalStyles from '../styles/global';

export const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Router>
      <main>
        <ul data-testid="nav">
          {appRoutes.map(route => (
            <li>
              <Link to={route.path}>{route.linkName}</Link>
            </li>
          ))}
        </ul>
        {appRoutes.map(route => (
          <Route exact path={route.path} component={route.component} />
        ))}
      </main>
    </Router>
    <Footer />
  </>
);
