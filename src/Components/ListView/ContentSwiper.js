import React from 'react';
import Coverflow from 'react-coverflow';
import styled from "styled-components";

const fn = function () {
  /* do your action */
}

const ContentSwiper = () => {
  return(
    <ContentSwiperStyle>
      <Coverflow
        displayQuantityOfSide={2}
        navigation={true}
        enableHeading={true}
        active={0}
        media={{
          '@media (max-width: 900px)': {
            width: '700px',
            height: '800px'
          },
          '@media (min-width: 900px)': {
            width: '1200px',
            height: '400px'
          }
        }}>
        <img src='https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
        <img src='https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg' alt='Album two' data-action="http://passer.cc"/>
        <img src='https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg' alt='Album three' data-action="https://doce.cc/"/>
        <img src='https://think.kera.org/wp-content/uploads/2020/05/shutterstock_750703924-800x500.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
    </Coverflow>
  </ContentSwiperStyle>
  );
}

const ContentSwiperStyle = styled.div`
  display: inline-block;
`;

export default ContentSwiper;