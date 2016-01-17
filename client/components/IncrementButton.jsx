IncrementButton = React.createClass({
  handleClick(e) {
    e.preventDefault();

    ClickStore.increment();
  },

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
});
