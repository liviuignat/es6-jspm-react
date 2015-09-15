'use strict';

jest.dontMock('./twitterFeedItem');

const React = require('react/addons');
const TwitterFeedItem = require('./twitterFeedItem');
const TestUtils = React.addons.TestUtils;

describe('Twitter feed item', function() {
  let item = null;
  let itemData;

  beforeEach(function() {
    itemData = {
      text: 'Here is a twitter message'
    };

    item = TestUtils.renderIntoDocument(<TwitterFeedItem item={itemData}/>);
  });

  it('contains the word React', function() {
    expect(React.findDOMNode(item).textContent).toContain(itemData.text);
  });
});
