import React from 'react'
import { Form, Button} from 'semantic-ui-react'
import {connect } from 'react-redux'
import {addPost} from '../actions/posts';



class PostForm extends React.Component {
  state = {title: '', body: ''}

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {title, body}= this.state
    const blog = {title, body}
    this.setState({title: '', body: ''})
    this.props.dispatch(addPost(blog))
  }

  render () {
    const {title, body} = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
       <Form.Group widths='equal'>
         <Form.Input name="title" value={title} onChange={this.handleChange} label='Last name' placeholder='Title' />
         <Form.TextArea name="body" value={body} onChange={this.handleChange} label='Gender' placeholder='Body' />
       </Form.Group>
       <Button primary type="submit">Add</Button>
      </Form>
    )
  }
}


export default connect()(PostForm);
