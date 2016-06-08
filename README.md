# mobx-provide

**MobX Store Provider Component Decorator**

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![version](https://img.shields.io/npm/v/mobx-provide.svg?style=flat-square)](http://npm.im/mobx-provide)
[![MIT License](https://img.shields.io/npm/l/mobx-provide.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![travis build](https://img.shields.io/travis/flipjs/mobx-provide.svg?style=flat-square)](https://travis-ci.org/flipjs/mobx-provide)
[![Codecov](https://img.shields.io/codecov/c/github/flipjs/mobx-provide.svg?style=flat-square)](https://codecov.io/github/flipjs/mobx-provide)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![downloads](https://img.shields.io/npm/dm/mobx-provide.svg?style=flat-square)](http://npm-stat.com/charts.html?package=mobx-provide&from=2016-03-24)

## Description

Do you like the convenience of importing store directly to your MobX component, but find testing a bit tricky? With `mobx-provide` decorator, you can still retain your imports, pass the store as props through the decorator, and just prepend your store with `props` or `this.props` or use destructuring like `const {store} = this.props` before the return statement in your `render()` method.

The `mobx-provide` is a decorator or higher-order component, that accepts a store object and a component as inputs, and returns a (enhanced) component.

## Install

`npm install --save mobx-provide`

## Usage

```js
const store = {usersStore, articlesStore, adminStore}
const ObserverComponentWithStore = provide(store)(observer(Component))
```

or

```js
const ObserverComponentWithStore = provide({
  usersStore,
  articlesStore,
  adminStore
})(observer(Component))
```

## Example

### With Direct Import

```js
import React from 'react'
import { observer } from 'mobx-react'
import userProfile from 'stores/userProfile'

export class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
      </div>
    )
  }
}

export default observer(UserProfile)
```

### With Provide Decorator

```js
import React from 'react'
import { observer } from 'mobx-react'
import userProfile from 'stores/userProfile'
import provide from 'mobx-provide'

export class UserProfile extends React.Component {
  render () {
    const {userProfile} = this.props
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
      </div>
    )
  }
}

const ObserverComponent = observer(UserProfile)

export default provide({userProfile})(ObserverComponent)
```

### The DIFF between the two

```diff
+ const {userProfile} = this.props
return (
  <div>
  ...
  </div>
)
```

```diff
- export default observer(UserProfile)
+ const ObserverComponent = observer(UserProfile)
+ export default provide({userProfile})(ObserverComponent)
```

There is not much difference between the two. You just have to reference the store using props:
`const {userProfile} = this.props`

## Testing

Basically, you have to have two exports for your component, named export and default export. Your named export could be the plain component for your testing, and the default export for enhanced or observer component.

In your test file, import the plain component, create a new instance of your store and pass it as props as you normally would. Simple!

## Contributing

To contribute, please follow these steps:

1. Fork the repo
1. Make a branch for your change
1. Run `npm install`
1. Make your changes
1. Run `git add -A` to add your changes
1. Run `npm run commit` (**Do not** use `git commit`)
1. Push your changes with `git push`
1. Create the Pull Request
1. All done and celebrate!

## Contributors

**Be the the next one to contribute! Add your name below:**

* [Jordan Kohl](https://github.com/simpixelated)

## License

MIT © [Felipe Apostol](https://github.com/flipjs)

