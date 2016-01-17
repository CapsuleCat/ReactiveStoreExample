ClickActions = Reflux.createActions([
  'increment',
  'reset'
]);

ClickStore = Reflux.createStore({
  listenables: [ClickActions],
  init: function () {
    this._click = { total: 0 };

    if (Meteor.isClient) {
      Tracker.autorun(Meteor.bindEnvironment(function (computation) {
        this._click = Clicks.findOne({});

        this.trigger(this.getInitialState());
      }.bind(this)));
    }
  },

  increment: function () {
    this._click.total++;
    Clicks.update(this._click._id, {
      $inc: {
        total: 1
      }
    });

    this.trigger(this.getInitialState());
  },

  reset: function () {
    this._click.total = 0;
    Clicks.update(this._click._id, {
      $set: {
        total: 0
      }
    });

    this.trigger(this.getInitialState());
  },

  getInitialState: function () {
    return {
      total: this._click.total
    }
  }
});
