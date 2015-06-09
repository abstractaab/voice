Template.inspiration.onRendered(function() {
	this.subscribe('inspiration')
});

Template.inspiration.helpers({
	images: function () {
		return Inspiration.find();
	}
});