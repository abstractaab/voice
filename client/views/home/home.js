Template.home.onRendered(function() {
	this.subscribe('posts')
});

Template.home.helpers({
	posts: function () {
		return Posts.find();
	}
});