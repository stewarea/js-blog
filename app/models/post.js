import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  body: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
