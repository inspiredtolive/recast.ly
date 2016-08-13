class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
    };
  }

  componentDidMount() {
    this.fetchVideos('cats');
  }

  fetchVideos(query) {
    var cb = (data) => {
      this.setState({
        'allVideos': data,
        'currentVideo': data[0]}
      );
    };
    this.props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: query, max: 5 }, cb);
  }

  onVideoClick( video) {
    console.log('APP heard', video);
    this.setState({'currentVideo': video});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5" >
          <VideoList videos={this.state.allVideos} videoClick= {this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }




} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
