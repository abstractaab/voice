/**
 * We will create a new role that will allow
 * not-admin users to edit products
 */
CommunityRole = new Roles.Role('community');

/**
 * We will allow users to edit the dictionary
 */
CommunityRole.allow('dictionary.update', true);

/**
 * This will make users only can edit this fields in the dictionary
 */
CommunityRole.helper('dictionary.allowedCategories', ['public']);

/**
 * Users can see products in the admin
 */
CommunityRole.allow('collection.products.index', true);

/**
 * And we will make that the users only see their products in the index
 */
CommunityRole.helper('collection.products.indexFilter', function() {
  return { createdBy: this.userId };
})

/**
 * Users can create products
 */
CommunityRole.allow('collection.products.insert', true);

/**
 * Users can update products
 */
CommunityRole.allow('collection.products.update', function(userId, doc, fields, modifier) {
  return doc.createdBy === userId; // Will be allowed to edit his own products
});

/**
 * Users can't change the createdBy attribute
 */
CommunityRole.deny('collection.products.update', function(userId, doc, fields, modifier) {
  return !_.contains(fields, 'userId');
});

/**
 * Users can remove products
 */
CommunityRole.allow('collection.products.remove', function(userId, doc) {
  return doc.createdBy === userId; // Will be allowed to edit his own products
});

/**
 * Users can see the create post button
 */
CommunityRole.allow('collection.products.showCreate', true);

/**
 * Users can see the update post button if they created the doc
 */
CommunityRole.allow('collection.products.showUpdate', function(doc) {
  return doc.createdBy == this.userId;
});

/**
 * Users can see the delete post button if they created the doc
 */
CommunityRole.allow('collection.products.showRemove', function(doc) {
  return doc.createdBy == this.userId;
});

