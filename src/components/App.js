import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/Header';
import styles from './App.module.scss';
import Search from 'components/Search';
import News from 'pages/NewsPage';
import Footer from 'components/Footer';
import Home from 'pages/HomePage';
import Regions from 'pages/RegionsPage';
import Video from 'pages/VideoPage';
import TV from 'pages/TVPage';

const App = () => {

  return (
    <div className={styles.App}>
      <BrowserRouter basename="/ampos">
        <Header/>
        <div className={styles.search}><Search/></div>
        <div className={styles.appbody}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/regions" component={Regions}/>
          <Route exact path="/video" component={Video}/>
          <Route exact path="/tv" component={TV}/>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
