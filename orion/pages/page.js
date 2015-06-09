orion.pages.addTemplate({
	template: 'page', 
	name: 'Page',
	description: 'A page',
	layout: 'layout'
}, {
	content: orion.attribute('summernote', {
		label: 'Content'
	}),
	image: orion.attribute('file', {
		label: 'Image',
		optional: true
	}),
})