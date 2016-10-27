import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if(confirm('Are you sure you want to delete this?')) {
      this.sendAction('destroyPost', post);
    }
    },
    saveUpdatePost(post, params) {
      this.sendAction('saveUpdatePost', post, params);
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});
