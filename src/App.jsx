/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/base/Header';
import Side from './components/base/Side';
import Main from './components/base/Main';
import styles from './app.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={`${styles.container} ${styles.container_vertical}`}>
          <Header />
          <div className={`${styles.container} ${styles.container_horizontal}`}>
            <Side />
            <Main />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
