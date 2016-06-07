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

