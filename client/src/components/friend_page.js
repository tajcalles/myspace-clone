import React from 'react'
import FriendList from './friend_list'
import { Segment } from 'semantic-ui-react'


const FriendPage = (props) => {


  return (
    <Segment>
      <h1>PICK A FRIEND</h1>
      <FriendList />
    </Segment>
  )
}


export default FriendPage
