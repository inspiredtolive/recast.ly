var searchYouTube = (options, callback) => {
  // TODO
  var url = 'https://www.googleapis.com/youtube/v3/search?';
  var settings = [];
  for (var key in options) {
    if (key === 'query') {
      settings.push('q=' + options[key]);
    } else if (key === 'max') {
      settings.push('maxResults=' + options[key]);
    } else {
      settings.push(key + '=' + options[key]);
    }
  }
  url += settings.join('&') + '&part=snippet&order=rating&type=video&videoEmbeddable=true';
  console.log(url);
  $.ajax({
    url: url,
    method: 'GET',
    success: function (data) {
      console.log(data);
      callback(data.items);
    },
    error: function (err) {
      console.log('error', err);
    }
  });
};

window.searchYouTube = searchYouTube;
