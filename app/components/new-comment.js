import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        text: this.get('text'),
        name: this.get('name'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    }
  }
});
