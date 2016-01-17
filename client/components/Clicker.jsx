Clicker = React.createClass({
  mixins: [Reflux.connect(ClickStore, 'click')],

  render() {
    return (
      <div>
        <IncrementButton />
        <ResetButton total={this.state.click.total} />
        <ClickText total={this.state.click.total} />
      </div>
    );
  }
});
