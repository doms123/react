import React, { Component } from 'react';
import uuid from 'uuid/v1';

export default class AddTweet extends Component {
  componentWillMount() {
    this.state = {
      newTweet: {},
      tweetTxt: ''
    }
  }

  tweetTxtChange(event) {
    this.setState({
      tweetTxt: event.target.value
    });
  }

  handleTweetSubmit(e) {
    e.preventDefault();
    if(this.state.tweetTxt === '') {
      alert('tweet field is required!');
    }else {
      this.setState({
        newTweet: {
          id: uuid(),
          tweetTxt: this.state.tweetTxt
        }
      },() => {
        this.props.addNewTweet(this.state.newTweet);
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleTweetSubmit.bind(this)}>
        <div>
          <p>Tweet</p>
          <input type="text" value={this.state.tweetTxt} placeholder="Enter your tweet" onChange={this.tweetTxtChange.bind(this)}/>
        </div>
        <br/>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}


