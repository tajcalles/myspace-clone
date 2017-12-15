import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import {getPosts} from '../actions/posts';




class PostList extends React.Component {

  componentDidMount(){
    this.props.dispatch(getPosts())
  }

  render () {
    return this.props.posts.map( post => {
      return(
        <Segment.Group>
        <Segment>{post.title}</Segment>
        <Segment.Group>
        <Segment>{post.body}</Segment>
        </Segment.Group>
        </Segment.Group>
      );

    });
  }
}

const mapStateToProps = (state) => {
  return  { posts: state.posts }
}

export default connect(mapStateToProps)(PostList);
