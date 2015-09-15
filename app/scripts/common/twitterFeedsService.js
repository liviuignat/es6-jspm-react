class TwitterFeedsService {
  getTweets() {
    return new Promise((resolve) => {
      $.get('http://twitter-cors.herokuapp.com/feed?count=100&user_names=liviu_ignat').done((items) => {
        return resolve(items);
      });
    });
  }

  static getInstance() {
    return new TwitterFeedsService();
  }
}

export default TwitterFeedsService;
