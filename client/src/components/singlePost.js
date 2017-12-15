import React from 'react'
import {connect } from 'react-redux'
import {getPosts} from '../actions/posts'


class SinglePost extends React.Component {
  state = { post: [] }

  componentDidMount = () =>{
    this.props.dispatch(getPosts())
    this.grabSinglePost()
    debugger
  }

  grabSinglePost = () => {
   const postId = this.props.match.params.id;
   console.log(postId)

   const postInfo = this.props.posts.filter( p => p.id == postId );
   const post = postInfo[0]
   console.log(postInfo[0])
   this.setState({post: post })
  }

  render () {
    return(
      <div>
        Post page
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default connect(mapStateToProps)(SinglePost);
