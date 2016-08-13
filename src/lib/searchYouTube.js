var searchYouTube = (options, callback) => {
  // TODO
  var url = 'something?';
  for (var key in options) {
    url += key + '=' + options[key] + '&';
  }
  console.log(url);
  $.ajax({
    url: url,
    method: 'GET',

  });
};

window.searchYouTube = searchYouTube;
