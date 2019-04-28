import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/Header';
import styles from './App.module.scss';
import Search from 'components/Search';
import News from 'pages/News';
import Footer from 'components/Footer';

const App = () => {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header/>
        <div className={styles.search}><Search/></div>
        <div className={styles.appbody}>
          <Route path="/" component={News}/>
          <Route exact path="/regions"/>
          <Route exact path="/video"/>
          <Route exact path="/tv"/>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
