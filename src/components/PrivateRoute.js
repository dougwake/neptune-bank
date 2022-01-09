import React from "react";
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component, ...rest }) {
  const isAuthed = true
  console.log(isAuthed, 'dddddddddddddddddddd')
  return (
    <Route {...rest} exact
      render = {(props) => (
        isAuthed ? (
          <div>
            {React.createElement(component, props)}
          </div>
        ) :
        (
            <h1>fail</h1>
        )
      )}
    />
  )
}