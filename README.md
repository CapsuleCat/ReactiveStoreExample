# Reactive Store Test

Demonstration application for Meteor using React, Reflux Stores, and Mongo.

Read more on [the Capsule Cat blog](http://blog.capsulecat.com/2016/01/16/reactive-stores-with-react/ ).

## About the App

The app is a simple click syncing app. When a user clicks a button, all users have their button counter incremented. When they click reset, the counter goes to 0.

## How It Works

* meteor add react
* meteor add fourquet:reflux

There is a `Click` collection and a `ClickStore`. When the
button is pressed, the button calls `ClickStore.increment()`.

This gets queued up in the dispatcher that comes with the `ClickStore`.

The ClickStore is what will run the Mongo query.

The ClickStore is also using Tracker to listen
for changes to the underlying data source.