import React from 'react';
import TwitterFeedItem from './twitterFeedItem'
import TwitterFeedsService from './../common/twitterFeedsService'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.twitterService = new TwitterFeedsService();
    this.state = {
      feeds: []
    };
  }

  componentDidMount() {
    this.twitterService.getTweets().then((items) => {
      this.setState({
        feeds: items
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Liviu Ignats feeds</h1>
        <ul>{this.state.feeds.map(this.renderFeed)}</ul>
      </div>
    );
  }

  renderFeed(item, index) {
    return <TwitterFeedItem key={item.id} item={item}></TwitterFeedItem>;
  }
}
