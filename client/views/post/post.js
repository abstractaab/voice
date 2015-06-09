Template.post.helpers({
	post: function() {
		return Products.findOne({url: Router.current().params.url});
	},
	bg: function() {
		return Session.get('bg');
	}
});

Template.post.events({
	'click .new-bg': function (e) {
		e.preventDefault();
		Session.set('bg', e.target.src);
	}
});

Template.post.onCreated(function() {
	this.subscribe('onePostWithUser', Router.current().params.url);
});
Template.post.onRendered(function() {
	console.log(Products.findOne({url: Router.current().params.url}))
	Session.set('bg', Products.findOne({url: Router.current().params.url}).background.url);
});