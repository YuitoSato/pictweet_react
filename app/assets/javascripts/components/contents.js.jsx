var Contents = React.createClass({
  render: function() {
    return(
      <div className="contents row">
        <ContentPost />
      </div>
    );
  }
});

var ContentPost = React.createClass({
  render: function() {
    var backgroundImage = {
    "background-image": "url(http://kabegami.org/wp-content/uploads/2013/04/YjHrXl.jpg)"
    }
    return (
      <div className="content_post" style={backgroundImage}>
        <More />
        ツイート内容
        <span className="name">
          <a>
            <span>投稿者</span>
            ゆいと
          </a>
        </span>
      </div>
    );
  }
});

var More = React.createClass({
  render: function() {
    return (
      <div className="more">
        <span>
          <image src='arrow_top.png' alt="arrow" />
        </span>
      </div>
    );
  }
});
