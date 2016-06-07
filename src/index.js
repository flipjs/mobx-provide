import React from 'react'

export default (store) => {
  return (Component) =>
    (props) => React.createElement(Component, { ...store, ...props })
}

