import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

const fn = function () {
  /* do your action */
}

const ContentSwiper = () => {
  return(
    <Coverflow
      displayQuantityOfSide={2}
      navigation={true}
      enableHeading={true}
      active={0}
      media={{
        '@media (max-width: 900px)': {
          width: '600px',
          height: '300px'
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px'
        }
      }}
      >
      <img src='https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg' alt='Album two' data-action="http://passer.cc"/>
      <img src='https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg' alt='Album three' data-action="https://doce.cc/"/>
      <img src='https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
  </Coverflow>
  );
}

export default ContentSwiper;