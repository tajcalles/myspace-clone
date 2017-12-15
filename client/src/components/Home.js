import React, { Component } from 'react';
import {connect } from 'react-redux'
import { Header, Segment, Grid } from 'semantic-ui-react';
import {getPosts} from '../actions/posts';
import PostList from './postList'
import PostForm from './PostForm'

class Home extends Component {

  // const styles = {
  //   backgroundColor: "#782398",
  // }


  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Welcome to BookFace</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <PostForm/>
              <PostList/>

            </Grid.Column>
            <Grid.Column width={6}>
              <h2>
                THIS IS GOING TO BE THE FRIENDS LIST!
              </h2>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return  { posts: state.posts }
}

export default connect(mapStateToProps)(Home);
