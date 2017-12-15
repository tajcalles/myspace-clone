import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment, Button } from 'semantic-ui-react'
import {getPosts, deletePost} from '../actions/posts';
import {Link} from 'react-router-dom'




class PostList extends React.Component {

  componentDidMount(){
    this.props.dispatch(getPosts())
  }

  render () {
    const {dispatch, id} = this.props
    return this.props.posts.map( post => {
      return(
        <Segment.Group key={id}>
          <Segment>{post.title}</Segment>
          <Segment.Group>
            <Segment>{post.body}</Segment>
          </Segment.Group>
          <Link to={`/post/${post.id}`}>Blog Info</Link>

        </Segment.Group>
      );

    });
  }
}

const mapStateToProps = (state) => {
  return  { posts: state.posts }
}

export default connect(mapStateToProps)(PostList);
