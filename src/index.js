/* eslint-disable no-unused-vars */

import React from 'react'

export default (store) => (Component) => () => <Component {...store} />

