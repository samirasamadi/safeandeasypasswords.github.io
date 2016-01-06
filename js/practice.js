
var key = "";
var challenge = "";
var count = 0;
var isEntered = false;
var cResponse = "";
var vowels = "AEIOU";
var siteNames = ['google', 'facebook', 'youtube', 'baidu', 'yahoo', 'amazon', 'wikipedia', 'qq', 'twitter', 'google', 'taobao', 'live', 'sina', 'linkedin', 'yahoo', 'weibo', 'ebay', 'google', 'yandex', 'vk', 'bing', 'google', 'msn', 'instagram', 'amazon', 'aliexpress', 'apple', 'blogspot', 'pinterest', 'ask', 'wordpress', 'tmall', 'reddit', 'mail', 'paypal', 'onclickads', 'tumblr', 'sohu', 'imgur', 'microsoft', 'imdb', 'gmw', 'netflix', 'amazon', 'googleadservices', 'go', 'alibaba', 'stackoverflow', 'craigslist', 'ok', 'tianya', 'rakuten', 'amazon', 'blogger', 'naver', 'espn', 'soso', 'cnn', 'outbrain', 'nicovideo', 'kat', 'dropbox', 'bbc', 'flipkart', 'github', 'diply', 'googleusercontent', 'adcash', 'xinhuanet',  'popads', 'dailymotion', 'pixnet', 'nytimes', 'ebay', 'sogou', 'booking', 'bbc', 'jd', 'dailymail', 'livedoor', 'adobe', 'wikia', 'adnetworkperformance', 'chase', 'china', 'indiatimes', 'uol', 'china', 'coccoc', 'huffingtonpost', 'alipay', 'directrev', 'buzzfeed', 'dmm', 'youku', 'amazon', 'cntv', 'blogspot', 'google', 'google', 'ameblo', 'google', 'amazon', 'microsoftonline', 'theguardian', 'amazonaws', 'bankofamerica', 'google', 'chinadaily', 'walmart', 'slideshare', 'cnet', 'etsy', 'daum', 'yelp', 'ettoday', 'globo', 'twitch', 'tudou', 'stackexchange', 'aol', 'quora', 'whatsapp', 'indeed', 'flickr', 'weather', 'google', 'tradeadexchange', 'office', 'amazon', 'naver', 'redtube', 'soundcloud', 'adf', 'ilividnewtab', 'snapdeal', 'reimageplus', 'bp', 'tubecup', 'forbes', 'wellsfargo', 'douban', 'zillow', 'office365', 'google', 'vice', 'gmail', 'leboncoin', 'google', 'godaddy', 'ikea', 'salesforce', 'vimeo', 'google', 'kakaku', 'detail', 'target', 'goo', 'about', 'tripadvisor', 'livejournal', 'avito', 'bestbuy', 'allegro', 'foxnews', 'wordpress', 'feedly', 'theladbible', 'themeforest', 'adplxmd', 'deviantart', '9gag', 'w3schools', 'nfl', 'washingtonpost', 'nih', 'wikihow', 'doublepimp', 'files', 'businessinsider', 'google', 'skype', 'gfycat', 'trackingclick', 'taboola', 'telegraph', 'softonic', 'google', 'avg', 'mozilla', 'nametests', 'mediafire', 'onet', 'americanexpress', 'pixiv', 'mystart', 'zol', 'ups', 'google', 'people', 'wix', 'amazon', 'hclips', 'homedepot', 'archive', 'doorblog', 'huanqiu', 'weebly', 'google', 'secureserver', 'usps', 'google', 'comcast', 'akamaihd', 'force', 'steamcommunity', 'wikimedia', 'bitauto', 'zhihu', 'addthis', 'ndtv', 'google', 'google', 'ebay-kleinanzeigen', 'mercadolivre', 'shutterstock', 'gamer', 'loading-delivery2', 'terrapops', 'xywy', 'detik', 'ifeng', 'web', 'bilibili', 'tlbb8', 'google', 'popcash', 'github', 'bild', 'usatoday', 'mailchimp', 'steampowered', 'sourceforge', 'orange', 'answers', 'hdfcbank', 'uptodown', 'fbcdn', 'gmx', 'xfinity', 'speedtest', 'dmm', 'varzesh3', 'google', 'webmd', 'wordreference', 'pconline', 'google', 'att', 'hootsuite', 'rambler', 'groupon', 'stumbleupon', 'terraclicks', 'goodreads', 'life', 'spiegel', 'bloomberg', 'wp', 'livejasmin', 'capitalone', 'icicibank', 'blog', 'youm7', 'google', 'caijing', 't-online', 'fedex', 'google', 'engadget', 'haiwainet', 'amazon', 'mashable', 'thesaurus', 'adidas', 'spotify', 'blogfa', 'nownews', '2ch', 'samsung', 'wsj', 'xuite', 'accuweather', 'watsons', 'pandora', 'ign', 'udn', 'gsmarena', 'mama', 'google', 'spaceshipads', 'bet365', 'seznam', 'paytm', 'chaoshi', 'badoo', 'media', 'verizonwireless', 'styletv', 'mlb', 'extratorrent', 'hulu', 'youth', 'ebay', 'abs-cbnnews', 'google', 'reuters', '1905', 'dell', 'chaturbate', 'livedoor', 'kaskus', 'zendesk', 'google', 'rediff', '39', 'bleacherreport', '1688', 'ijreview', 'trello', 'putlocker', 'twimg', 'likes', 'oeeee', 'onlinesbi', 'tistory', 'reference', 'jabong', 'rt', 'google', 'sahibinden', 'smzdm', 'mydomainadvisor', 'google', 'quikr', 'iqiyi', 'icloud', 'milliyet', 'impress', 'mega', 'yaolan', 'warmportrait', 'ask', 'macys', 'google', 'rutracker', 'evernote', 'infusionsoft', 'enet', 'google', 'haosou', 'theverge', 'baike', 'kickstarter', 'cbssports', 'slickdeals', 'google', 'kouclo', 'ce', 'lady8844', 'thefreedictionary', 'kohls', 'eksisozluk', 'ebay', 'liveinternet', 'oracle', 'google', 'babytree', 'tube8', 'gameforge', 'google', 'ebay', 'hurriyet', '4shared', 'ppomppu', 'elpais', 'meetup', 'repubblica', 'chinatimes', 'blogimg', 'ewt', 'taleo', 'teepr', 'goal', 'scribd', 'libero', 'newegg', 'photobucket', 'gizmodo', 'list-manage', 'eastday', 'lifehacker', 'marca', 'olx', 'yandex', 'sberbank', 'neobux', 'buzzfil', 'qunar', 'google', 'ltn', 'livedoor', 'onedio', 'slack', 'citi', 'uploaded', 'ameba', 'stockstar', 'vid', 'time', 'torrentz', 'fiverr', 'naukri', 'cloudfront', 'espncricinfo', 'lowes', 'kompas', 'gap', 'aparat', 'free', 'cnzz', 'xe', 'disqus', 'techcrunch', 'independent', '4dsply', 'xda-developers', 'retailmenot', 'pinimg', 'savefrom', 'liputan6', 'hotels', 'hm', 'admtpmp127', 'kinopoisk', 'battle', 'justdial', 'nbcnews', 'youboy', 'bhaskar', 'nordstrom', 'shopclues', 'mobile', 'gmarket', 'nyaa', 'timeanddate', 'surveymonkey', 'gamefaqs', 'autohome', 'zippyshare', 'lenovo', 'corriere', 'wunderground', 'rbc', 'expedia', 'albawabhnews', 'tabelog', 'freegameszonetab', 'google'];

function checker() {
    if(key == "") {
        alert("Make sure to submit your key!");
        return;
    }
    animate();
}
function animate() {
  cTime = 0;
  boldChallengeChar(0);
  for(x = 0; x < challenge.length; x++) {
    index = key.indexOf(challenge.substring(x,x+1));

    if( index != -1) {

      resultIndex = findNextLetterIndex(index+1,key);
      (function(cTime,x) {
          setTimeout(
            function() { boldChallengeChar(x); },
            1000 * (cTime)
         );
      })(cTime,x);

      animateKey(resultIndex,cTime);
      cTime += resultIndex+1;
    }
  }
}
function animateKey(index,pause) {

  for (z = 0; z < index; z++) {
    (function(z,pause) {
        setTimeout(
           function() {italicsKeyChar(z)},
           1000 * (z + pause)
       );
    })(z,pause);
  }

(function(index,pause) {
        setTimeout(
            function() { boldKeyChar(index); },
           1000 * (index+ pause)
        );
    })(index,pause);
}
function findNextLetterIndex(index,key) {
  var isFound = false;
  while(!isFound) {
    if (index >= key.length) {
      index = 0;
      }
    if (vowels.indexOf(key.substring(index,index+1)) != -1) {
      index +=1;
      if (index >= key.length) {
      index = 0;
      }
    } else {
      isFound = true
    }
  }
  return index
}
function italicsKeyChar(i) {
  w4 = key.substring(0,i);
  w4 += key.substring(i,i+1).italics();
  w4 += key.substring(i+1,key.length);
  document.getElementById("keyData").innerHTML = w4;
}
function boldKeyChar(i) {
  w3 = key.substring(0,i);
  w3 += key.substring(i,i+1).bold();
  w3 += key.substring(i+1,key.length);
  document.getElementById("keyData").innerHTML = w3;
  prevAns = document.getElementById("inputBox").value;
  document.getElementById("inputBox").value = prevAns + key.substring(i,i+1);
  if(document.getElementById("inputBox").value == cResponse) {
      document.getElementById("inputBox").value += "aB7!";
  }
}
function boldChallengeChar(i) {
  w2 = challenge.substring(0,i);
    w2 += challenge.substring(i,i+1).bold();
    w2 += challenge.substring(i+1,challenge.length);
    document.getElementById("challengeData").innerHTML = w2;
}
function emailUs() {
    window.open('mailto:test@gatech.edu');
}
function findNextLetter(index,key) {
  var isFound = false;
  while(!isFound) {

    if (index >= key.length) {
      index = 0;
      }

    if (vowels.indexOf(key.substring(index,index+1)) != -1) {
      index +=1;
      if (index >= key.length) {
      index = 0;
      }
    } else {
      isFound = true
    }
  }
  return key.substring(index,index+1);
}
function findResponseLength(challenge,key) {
    cResponse = "";
  for (i = 0; i < challenge.length; i++) {
    var index = key.indexOf(challenge.substring(i,i+1));
    if( index != -1) {
      count +=1;
      cResponse += findNextLetter(index+1,key);
    }
  }
  return count;
}
function getChallenge(isFirst){
    var index = Math.floor((Math.random() * siteNames.length - 1));
    var challenges = siteNames[index].toUpperCase();
    var text = document.createElement('p');
    text.innerHTML = "The challenge is <b>" + challenges +"</b>";
    if (isFirst == 1) {
        var prevReponse = document.createElement('p');
        prevReponse.innerHTML = "The response was " + cResponse + "aB7!";
        var prevChallenge = document.getElementById("challengeDiv").innerHTML;
        prevChallenge = prevChallenge.replace("is","was");
        document.getElementById("challengeDiv").appendChild(prevChallenge)
        document.getElementById("challengeDiv").appendChild(prevReponse);
    }
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
  document.getElementById("inputBox").removeAttribute("disabled");
  if (!isEntered) {
    count = findResponseLength(challenge,key);
    isEntered = true;
    document.getElementById('bt').innerHTML = "Click to verify";
  } else {
    var uResponse = "";

     uResponse +=  document.getElementById(("inputBox")).value;

    if(uResponse == cResponse + "aB7!") {
        alert("correct");
        document.getElementById('bt').innerHTML = "Ready?";
        document.getElementById('inputBox').value = "";
        count = 0;
        isEntered = false;
        getChallenge(1);
    } else {
      alert("looking for " + cResponse + "aB7!" + " your response was " + uResponse);
      document.getElementById("inputBox").value = cResponse + "aB7!";
    }

  }

}
