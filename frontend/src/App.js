import React from 'react';
import Shortify from './containers/Shortify';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <section className="main">
        <Header />
        <Shortify />
      </section>
    );
  }
}

export default App;
