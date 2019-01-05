import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AppRoutes from '../../routes/routes.enum';

import '../../styles/main.scss';

import { Header, Footer } from './components';
import { Home, About } from '../../routes';

interface AppProps {
  a: string;
  b: number;
}

export const App = ({ a, b }: AppProps) => (
  <>
    <Header />
    <Router>
      <>
        <ul data-testid="nav">
          <li>
            <Link to={AppRoutes.Home}>Home</Link>
          </li>
          <li>
            <Link to={AppRoutes.About}>About</Link>
          </li>
        </ul>
        <Route exact path={AppRoutes.Home} component={Home} />
        <Route path={AppRoutes.About} component={About} />
      </>
    </Router>
    <Footer />
  </>
);