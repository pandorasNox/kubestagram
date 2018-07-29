import React from 'react'
import { withSiteData } from 'react-static'

import styled from 'styled-components'

export default withSiteData(() => (
  <Grid>
    <Headline>Login</Headline>
  </Grid>
))

const Grid = styled.section`
  display: grid;
`

const Headline = styled.h1`
  font-size: calc(2vw + 1em);
  text-align: center;
`;
