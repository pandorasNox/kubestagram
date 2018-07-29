import React from 'react'
import { withSiteData } from 'react-static'

import styled from 'styled-components'

import { Formik } from 'formik';

export default withSiteData((props) => (
  <Grid>
    <Headline>Login</Headline>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
      ) => {
        const { email, password } = values;
        setTimeout(() => {
          setSubmitting(false);
          props.history.push('/')
        }, 2000)
        console.log(email, password);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </StyledForm>
      )}
    />
  </Grid>
))

const Grid = styled.div`
  display: grid;
  justify-content: center;
`

const StyledForm = styled((props) => <form {...props} />)`
  width: 100%;
`

const Headline = styled.h1`
  font-size: calc(2vw + 1em);
  text-align: center;
`;
