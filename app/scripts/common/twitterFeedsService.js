export default class TwitterFeedsService {
  getTweets() {
    return new Promise((resolve, reject) => {
      $.get('http://twitter-cors.herokuapp.com/feed?count=100&user_names=liviu_ignat').done((items) => {
        return resolve(items);
      });
    });
  }
}
