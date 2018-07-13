import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>
          Sign out
        </button>
      );
    }

    return (
      <button onClick={() => this.props.changeAuth(true)}>
        Sign in
      </button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post a comment</Link></li>
        <li><Link to="/">{this.renderButton()}</Link></li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        <Route path="/post" component={CommentBox} />
        <Route path="/" component={CommentList}/>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);