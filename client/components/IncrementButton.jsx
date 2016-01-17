IncrementButton = React.createClass({
  handleClick(e) {
    e.preventDefault();

    ClickStore.increment();
  },

  render() {


    return (
      <button style={ButtonStyle} onClick={this.handleClick}>Click Me</button>
    );
  }
});
