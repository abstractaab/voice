Template.post.helpers({
	post: function() {
		return Products.findOne({url: Router.current().params.url});
	}
});

Template.post.onRendered(function() {
	this.subscribe('onePostWithUser', Router.current().params.url);
});