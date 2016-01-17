if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(<Clicker />, document.getElementById('render-target'));
  });
}

if (Meteor.isServer) {
  var click = Clicks.findOne({});
  
  if (click == null) {
    Clicks.insert({
      total: 0
    });
  }
}