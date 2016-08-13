var VideoPlayer = (props) => {
  var src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
  var title = 'Video Title';
  var desc = 'Video Description';
  if (props.video !== undefined) {
    console.log(props);
    src = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    title = props.video.snippet.title;
    desc = props.video.snippet.description;
  }
  return (
    <div className="video-player" id='video-player'>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={src} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{title}</h3>
        <div>{desc}</div>
      </div>
    </div>
);

};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
