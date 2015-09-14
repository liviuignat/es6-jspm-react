export
default class TwitterFeedsService {
  getTweets() {
    return new Promise((resolve, reject) => {
      $.get('http://twitter-cors.herokuapp.com/feed?count=10&user_names=liviu_ignat,techcrunch').done((items) => {
        return resolve(items);
      });
    });
  }
}
