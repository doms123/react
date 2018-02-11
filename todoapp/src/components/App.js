import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { fetchTweets, addTweet, deleteTweet } from '../actions/tweetsActions';
import TweetList from './TweetList';
import AddTweet from './AddTweet';

const stateMap = (store) => {
  return {
      user: store.user.user,
      userFetched: store.user.fetched,
      tweets: store.tweets.tweets
  };
};

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  loadTwitt() {
    this.props.dispatch(fetchTweets());
  }

  handleNewTweet(tweet) {
    this.props.dispatch(addTweet(tweet));
  }

  handleDeleteTweet(id) {
    this.props.dispatch(deleteTweet(id));
  }

  render() {
    const { user, tweets } = this.props;
    if(!tweets.length) {
      return (
        <button onClick={this.loadTwitt.bind(this)}>Load Tweets</button>
      )
    }

    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);

    return (
      <div className="App">
        <h1>Hello {user.name}</h1>
        <br/>
        <AddTweet addNewTweet={this.handleNewTweet.bind(this)}/>
        <br/>
        <TweetList tweets={tweets} removeTweet={this.handleDeleteTweet.bind(this)}/>
      </div>
    );

    
  }
}

export default connect(stateMap)(App);
