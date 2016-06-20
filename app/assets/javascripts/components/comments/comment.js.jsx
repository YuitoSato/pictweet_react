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
