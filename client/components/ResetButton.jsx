ResetButton = React.createClass({
  handleReset(e) {
    e.preventDefault();

    ClickStore.reset();
  },

  render() {
    return (
      <button onClick={this.handleReset}>Reset {this.props.total} Clicks?!</button>
    );
  }
});
