var Search = (props) => {
  var inputElement;
  var onUserInput = function (e) {
    console.log('input has changed', inputElement.value);
    props.searchInput(inputElement.value);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" ref={(ref) => inputElement = ref} onInput={onUserInput}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
