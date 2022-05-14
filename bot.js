import Twitter from 'twitter-lite';
import 'dotenv/config';

const app = new Twitter({
  extension: false,
  version: '2',
  bearer_token: process.env.bearer_token,
});

const user = new Twitter({
  version: '2',
  extension: false,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
});

let params = {
  max_results: 10,
  'tweet.fields': 'public_metrics',
  expansions: 'author_id,referenced_tweets.id',
  'user.fields': 'id,username',
  query: 'from:KXkass',
};

user
  .getRequestToken('oob')
  .then((res) =>
    console.log({
      reqTkn: res.oauth_token,
      reqTknSecret: res.oauth_token_secret,
    })
  )
  .catch((err) => {
    console.log(err);
  });

// const { meta, data, includes } = await user.get('tweets/search/recent', params);

// console.log(data)
/* 

let dataArr = [];
let i = 0;
data.forEach((element) => {
  if (data[i].referenced_tweets !== undefined) {
    let text = getText(data, i);
    let tweetsData = getTweetData(data, i);
    i++;
    dataArr.push({ text: text, data: tweetsData });
  }
});

function getText(data, i) {
  return data[i].text;
}

function getTweetData(data, i) {
  for (let e = 0; e < data[i].referenced_tweets.length; e++) {
    let type = data[i].referenced_tweets[e].type;
    let id = data[i].referenced_tweets[e].id;

    return { type: type, id: id };
  }
}

let string = 'Hello World'; */

/* for (let i = 0; i < dataArr.length; i++) {
  if (dataArr[i].data.type == 'retweeted') {
    await retweet(dataArr[i].data.id);
  } else {
    await comment(dataArr[i].data.type, dataArr[i].text, string);
  }
} */

let tweetID = '1524753812648566785';
let myID = '1392188663887540224';

let param = {
  tweet_id: '1524753812648566785',
};

const rehk = user.post('tweets');
// }
/* async function comment(tweetID, text, tweetContent) {
  let { replyTo } = await user.post('statuses/update/', {
    in_reply_to_status_id: tweetID,
    status: `${text} ${tweetContent}`,
  });
} */
