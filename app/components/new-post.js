import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showForm() {
      this.set('addNewPost', true);
    },
    saveNewPost() {
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        image: this.get("image"),
        body: this.get("body"),
      };
      this.set('addNewPost', false);
      this.sendAction('saveNewPost', params);
    }
  }
});
