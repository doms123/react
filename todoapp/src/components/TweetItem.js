import React, { Component } from 'react';

export default class TweetItem extends Component {
  removeClick(id) {
    this.props.removeTweet(id);
  }
  render() {
    return (
       <li key={this.props.tweet.id}>{this.props.tweet.text} <button onClick={this.removeClick.bind(this, this.props.tweet.id)}>x</button></li> 
    )
  }
}


