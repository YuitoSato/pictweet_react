var CommentContainer = React.createClass({
  getInitialState: function() {
    return {comments: []};
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(result) {
        this.setState({comments: result.data});
        {// result.dataでajaxの結果を取得。commentsに格納。
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  handleCommentSubmit: function(comment) {
    this.setState({comments: this.state.comments.concat([comment])});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="container">
        <CommentList comments={this.state.comments}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var CommentForm= React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text) {
      return;
    }
    this.props.onCommentSubmit({text: text});
    ReactDOM.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <textarea ref="text"></textarea>
        <input type="submit" value="SENT" />
      </form>
    );
  }
});

var CommentList= React.createClass({
  render: function() {
    var commentNodes = this.props.comments.map(function (comment) {
      return(
        <Comment text={comment.text} nickname={comment.user.nickname}/>
      );
      var comment = this.props.comments[0];
    });
    return (
      <p>
        {commentNodes}
      </p>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <p>
        <strong>
          {this.props.nickname}
        </strong>
          {this.props.text}
      </p>
    );
  }
});
