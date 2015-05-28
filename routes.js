/**
 * Add your routes here
 */

Router.route('/', {
	name: 'home',
	layoutTemplate: 'layout'

});

Router.route('/products', {
	name: 'products',
	layoutTemplate: 'layout'
});

Router.route('/product/:url', {
	name: 'post',
	layoutTemplate: 'layout'
});