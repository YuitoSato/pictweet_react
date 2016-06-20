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
