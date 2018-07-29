import React from 'react'
import { withSiteData } from 'react-static'
//
// import logoImg from '../logo.png'

import styled from 'styled-components'

export default withSiteData(() => (
  <div>
    <Headline>Welcome to</Headline>
    {/* <img src={logoImg} alt="" /> */}
    <p>the meetup</p>
  </div>
))

const Headline = styled.h1`
  font-size: calc(2vw + 1em);
  text-align: center;
  color: red;
`;
