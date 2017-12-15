import React, { Component } from 'react';
import {connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react';
import {getPosts} from '../actions/posts';
import PostList from './postList.js'

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(getPosts())
  }

  renderPosts = () => {

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

  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Home Component</Header>
        {this.renderPosts()}
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return  { posts: state.posts }
}

export default connect(mapStateToProps)(Home);
