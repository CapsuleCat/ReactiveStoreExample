ResetButton = React.createClass({
  handleReset(e) {
    e.preventDefault();

    ClickStore.reset();
  },

  render() {
    var style = _.extend({}, ButtonStyle, {
      backgroundColor: 'red'
    });

    return (
      <button style={style} onClick={this.handleReset}>Reset {this.props.total} Clicks?!</button>
    );
  }
});
