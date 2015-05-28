Template.products.onRendered(function() {
	this.subscribe('products')
});

Template.products.helpers({
	posts: function () {
		console.log(Products.find().fetch());
		return Products.find();
	}
});