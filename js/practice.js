
var key = "";
var challenge = "";
var count = 0;
var isEntered = false;
var cResponse = "";
var vowels = "AEIOU";
var siteNames = ['google', 'facebook', 'youtube', 'baidu', 'yahoo', 'amazon', 'wikipedia', 'qq', 'twitter', 'google', 'taobao', 'live', 'sina', 'linkedin', 'yahoo', 'weibo', 'ebay', 'google', 'yandex', 'hao123', 'vk', 'bing', 'google', 't', 'msn', 'instagram', 'amazon', 'aliexpress', 'google', 'apple', 'blogspot', 'pinterest', 'ask', 'wordpress', 'tmall', 'google', 'reddit', 'google', 'mail', 'paypal', 'onclickads', 'tumblr', 'sohu', 'google', 'imgur', 'microsoft',  'google', 'google', 'imdb', 'gmw', 'netflix', 'fc2', 'amazon', '360', 'googleadservices', 'go', 'alibaba', 'stackoverflow', 'google', 'google', 'craigslist', 'ok', 'google', 'tianya', 'rakuten', 'amazon', 'blogger', 'naver', 'espn', 'google', 'soso', 'cnn', 'outbrain', 'nicovideo', 'kat', 'google', 'dropbox', 'bbc', 'flipkart', 'github', 'diply', 'googleusercontent', 'adcash', 'xinhuanet', 'amazon', 'google', 'google', 'ebay', 'google', 'popads', 'dailymotion', 'pixnet', 'nytimes', 'ebay', 'sogou', 'booking', 'bbc', 'jd', '163', 'dailymail', 'livedoor', 'adobe', 'wikia', 'adnetworkperformance', 'chase', 'china', 'indiatimes', 'uol', 'china', 'coccoc', 'huffingtonpost', 'google', 'alipay', 'directrev', 'buzzfeed', 'dmm', 'youku', 'google', 'amazon', 'cntv', 'blogspot', 'google', 'google', 'ameblo', 'google', 'amazon', 'microsoftonline', 'theguardian', 'amazonaws', 'bankofamerica', 'google', 'chinadaily', 'walmart', 'slideshare', 'cnet', 'etsy', 'daum', 'yelp', 'ettoday', 'globo', 'twitch', 'tudou', 'stackexchange', 'aol', 'quora', 'whatsapp', 'indeed', 'flickr', 'weather', 'google', 'tradeadexchange', 'office', 'amazon', 'naver', 'redtube', 'soundcloud', 'adf', 'ilividnewtab', 'snapdeal', 'reimageplus', 'bp', 'tubecup', 'forbes', 'wellsfargo', 'douban', 'zillow', 'office365', 'google', 'vice', 'gmail', 'leboncoin', 'google', 'godaddy', 'ikea', 'salesforce', 'vimeo', 'google', 'kakaku', 'detail', 'target', 'goo', 'about', 'tripadvisor', 'livejournal', 'avito', 'bestbuy', 'allegro', 'foxnews', 'wordpress', 'feedly', 'theladbible', 'themeforest', 'adplxmd', 'deviantart', '9gag', 'w3schools', 'nfl', 'washingtonpost', 'nih', 'wikihow', 'doublepimp', 'files', 'businessinsider', 'google', 'skype', 'gfycat', 'trackingclick', 'taboola', 'telegraph', 'softonic', 'google', 'avg', 'mozilla', 'nametests', 'mediafire', 'onet', 'americanexpress', 'pixiv', 'mystart', 'zol', 'ups', 'google', 'people', 'wix', 'amazon', 'hclips', 'homedepot', 'archive', 'doorblog', 'huanqiu', 'weebly', 'google', 'secureserver', 'usps', 'google', 'comcast', 'akamaihd', 'force', 'steamcommunity', 'wikimedia', 'bitauto', 'zhihu', 'addthis', 'ndtv', 'google', 'google', 'ebay-kleinanzeigen', 'mercadolivre', 'shutterstock', 'gamer', 'loading-delivery2', 'terrapops', 'xywy', 'detik', 'ifeng', 'web', 'bilibili', 'tlbb8', 'google', 'popcash', 'github', 'bild', 'usatoday', 'mailchimp', 'steampowered', 'sourceforge', 'orange', 'answers', 'hdfcbank', 'uptodown', 'fbcdn', 'gmx', 'hp', 'xfinity', 'speedtest', 'dmm', 'varzesh3', 'google', 'webmd', 'wordreference', 'pconline', 'google', 'att', 'hootsuite', 'rambler', 'groupon', 'stumbleupon', 'terraclicks', 'goodreads', 'life', 'spiegel', 'bloomberg', 'wp', 'livejasmin', 'capitalone', 'icicibank', 'blog', 'youm7', 'google', 'caijing', 't-online', 'fedex', 'google', 'engadget', 'haiwainet', 'amazon', 'mashable', 'thesaurus', 'adidas', 'spotify', 'blogfa', 'nownews', '2ch', 'samsung', 'wsj', 'xuite', 'accuweather', 'watsons', 'pandora', 'ign', 'udn', 'gsmarena', 'mama', 'google', 'spaceshipads', 'bet365', 'seznam', 'paytm', 'chaoshi', 'badoo', 'media', 'verizonwireless', 'styletv', 'mlb', 'extratorrent', 'hulu', 'youth', 'ebay', 'abs-cbnnews', 'google', 'reuters', '1905', 'dell', 'chaturbate', 'livedoor', 'kaskus', 'zendesk', 'google', 'rediff', '39', 'bleacherreport', '1688', 'ijreview', 'trello', 'putlocker', 'twimg', 'likes', 'oeeee', 'onlinesbi', 'tistory', 'reference', 'jabong', 'rt', 'google', 'sahibinden', 'smzdm', 'mydomainadvisor', 'google', 'quikr', 'iqiyi', 'icloud', 'milliyet', 'impress', 'mega', 'yaolan', 'warmportrait', 'ask', 'macys', 'google', 'rutracker', 'evernote', 'infusionsoft', 'enet', 'google', 'haosou', 'theverge', 'baike', 'kickstarter', 'cbssports', 'slickdeals', 'google', 'kouclo', 'ce', 'lady8844', 'thefreedictionary', 'kohls', 'eksisozluk', 'ebay', 'liveinternet', 'oracle', 'google', 'babytree', 'tube8', 'gameforge', 'google', 'ebay', 'hurriyet', '4shared', 'ppomppu', 'elpais', 'meetup', 'repubblica', 'chinatimes', 'blogimg', 'ewt', 'taleo', 'teepr', 'goal', 'scribd', 'libero', 'newegg', 'photobucket', 'gizmodo', 'list-manage', 'eastday', 'lifehacker', 'marca', 'olx', 'yandex', 'sberbank', 'neobux', 'buzzfil', 'qunar', 'google', 'ltn', 'livedoor', 'onedio', 'slack', 'citi', 'uploaded', 'ameba', 'stockstar', 'vid', 'time', 'torrentz', 'fiverr', 'naukri', 'cloudfront', 'espncricinfo', 'lowes', 'kompas', 'gap', 'aparat', 'free', 'cnzz', 'xe', 'disqus', 'techcrunch', 'independent', '4dsply', 'xda-developers', 'retailmenot', 'pinimg', 'savefrom', 'liputan6', 'hotels', 'hm', 'admtpmp127', 'kinopoisk', 'battle', 'justdial', 'nbcnews', 'youboy', 'bhaskar', 'nordstrom', 'shopclues', 'mobile', 'gmarket', 'nyaa', 'timeanddate', 'surveymonkey', 'gamefaqs', 'autohome', 'zippyshare', 'lenovo', 'corriere', 'wunderground', 'rbc', 'expedia', 'albawabhnews', 'tabelog', 'freegameszonetab', 'google'];

function findNextLetter(index,key) {
  var isFound = false;
  while(!isFound) {

    if (index >= key.length - 1) {
      index = 0;
      }

    if (vowels.indexOf(key.substring(index,index+1)) != -1) {
      index +=1;
      if (index >= key.length - 1) {
      index = 0;
      }
    } else {
      isFound = true
    }
  }
  return key.substring(index,index+1);
}
function findResponseLength(challenge,key) {
  for (i = 0; i < challenge.length; i++) {
    var index = key.indexOf(challenge.substring(i,i+1));
    if( index != -1) {
      count +=1;
      cResponse += findNextLetter(index+1,key);
    }
  }
  return count;
}
function getChallenge(){
    var index = Math.floor((Math.random() * siteNames.length - 1));
    var challenges = siteNames[index].toUpperCase();
    var text = document.createElement('p');
    text.innerHTML = "The challenge is <b>" + challenges +"</b>";
    document.getElementById("challengeDiv").appendChild(text);
    challenge = challenges;

}
function respond() {
  key = document.getElementById("firstWord").value + document.getElementById("secondWord").value + document.getElementById("thirdWord").value;
  key = key.toUpperCase();
  if(key == "") {
      alert("Please enter words");
      return;
  }
  if (!isEntered) {
    count = findResponseLength(challenge,key);
    for( x  = 0; x < count; x++){
        var textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.id = ("box"+x);
        textbox.maxLength = 1;
        textbox.style["width"] = "30px";
        document.getElementById('checks').appendChild(textbox);
    }
    isEntered = true;
    document.getElementById('bt').innerHTML = "Click to verify";
  } else {
    var uResponse = "";
    for(x = 0; x < count;x++) {
      uResponse +=  document.getElementById(("box" + x)).value.toUpperCase();
    }
    if(uResponse == cResponse) {
      alert("correct");
       for(x = 0; x < count;x++) {
          document.getElementById(("box" + x)).remove();
        }
      document.getElementById('bt').innerHTML = "Ready?";
        count = 0;
        isEntered = false;
        cResponse = "";
        getChallenge();

    } else {
      alert("incorrect please try again");
      for(x = 0; x < count;x++) {
       document.getElementById(("box" + x)).value = "";
      }
    }

  }

}
