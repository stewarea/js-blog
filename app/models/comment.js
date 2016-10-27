import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  name: DS.attr(),
  post: DS.belongsTo('post', { async: true}),
});
