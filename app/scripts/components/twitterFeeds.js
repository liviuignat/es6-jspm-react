import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [
        'No feed so far'
      ]
    };
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
    return <li key={index}>{item}</li>;
  }
}
