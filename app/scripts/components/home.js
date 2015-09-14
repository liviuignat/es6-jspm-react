import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Browserify',
        'Babel',
        'Bootstrap',
        'Modernizr',
        'Jest'
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="hero-unit">
          <Link to={`/feeds`}>See twitter feeds</Link>
          <h1>'Allo, 'Allo!</h1>
          <p>This is a React component.<br/>
             You now also have:</p>
          <ul>{this.state.items.map(this.renderItem)}</ul>
        </div>
      </div>
    );
  }

  renderItem(item, index) {
    return <li key={index}>{item}</li>;
  }
}
