'use strict';

jest.dontMock('./twitterFeeds');

const React = require('react/addons');
const TwitterFeeds = require('./twitterFeeds');
const TwitterFeedsService = require('./../../common/twitterFeedsService');
const TestUtils = React.addons.TestUtils;

describe('Twitter feed item', function() {
  let component = null;
  let itemData;

  beforeEach(function() {
    itemData = [{
      text: 'Here is the first twitter message'
    }, {
      text: 'Here is the second twitter message'
    }];

    const twitterService = new TwitterFeedsService();
    twitterService.getTweets = jest.genMockFunction().mockReturnValue(Promise.resolve(itemData));
    TwitterFeedsService.getInstance = jest.genMockFunction().mockReturnValue(twitterService);

    component = TestUtils.renderIntoDocument(<TwitterFeeds feeds={itemData}/>);
  });

  it('should contain the text "Liviu"', function() {
    expect(React.findDOMNode(component).textContent).toContain('Liviu');
  });

  it('should contain the first element text', function() {
    const items = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li');
    expect(items.length).toBe(2);
  });

});
