import Ember from 'ember';

export default Ember.Component.extend({
  showPostForm: false,
  actions: {
    updatePostForm() {
      this.set('showPostForm', true);
    },
    saveUpdatePost(post) {
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        image: this.get("image"),
        body: this.get("body"),
      };
      this.set('showPostForm', false);
      this.sendAction('saveUpdatePost', post, params);
    }
  }
});
