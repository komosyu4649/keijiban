import React from 'react';
import './App.css';
import CommentList from './components/CommentList/CommentList';
import Form from './components/Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addComment} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
