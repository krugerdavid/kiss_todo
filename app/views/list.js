var Marionette = require('backbone.marionette');

var ToDo = Marionette.LayoutView.extend({
  tagName: 'li',
  className: 'list-group-item d-flex justify-content-between lh-condensed',
  template: require('../templates/todoitem.html')
});

var TodoList = Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'list-group mb-3',
  childView: ToDo
});


module.exports = TodoList;