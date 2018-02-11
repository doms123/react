import React, { Component } from 'react';
import TweetItem from './TweetItem';

export default class TweetList extends Component {
  removeTweet(id) {
    this.props.removeTweet(id);
  }

  render() {
    let tweetItem;
    if(this.props.tweets) {
      tweetItem = this.props.tweets.map(tweet => {
        return (
          <TweetItem tweet={tweet} removeTweet={this.removeTweet.bind(this)} />
        )
      });
    }
    return (
        <div>
          <h3>Tweet List</h3>
          <ul>
            {tweetItem}
          </ul>
        </div>
    )
  }
}


