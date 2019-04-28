import { useEffect } from 'react';

const Home = (props) => {
  useEffect(() => {
    if (props.location.pathname === '/') {
      props.history.replace('/news');
    }
  }, []); // eslint-disable-line
  return null;
};

export default Home;