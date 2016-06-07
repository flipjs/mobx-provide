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

