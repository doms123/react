import axios from 'axios';

export function fetchTweets() {
    return function(dispatch) {
        axios.get('http://rest.learncode.academy/api/test123/tweets').then(res => {
            dispatch({
                type: 'FETCH_TWEETS_FULLFILLED',
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: 'FETCH_TWEETS_REJECTED',
                payload: err
            })
        });
    }
}

export function addTweet(tweet) {
    return {
        type: 'ADD_TWEET',
        payload: {
            id: tweet.id,
            text: tweet.tweetTxt
        }
    }
}

export function updateTweet() {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id: null,
            text: null
        }
    }
}

export function deleteTweet(id) {
    return {
        type: 'DELETE_TWEET',
        payload: {
            id: id
        }
    }
}