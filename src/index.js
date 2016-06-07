import React from 'react'

export default (store) => {
  return (Component) =>
    () => React.createElement(Component, store)
}

