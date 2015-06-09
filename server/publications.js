/**
 * Publish all posts
 */
Meteor.publish('products', function () {
  return Products.find();
});
Meteor.publish('posts', function () {
  return Posts.find();
});
Meteor.publish('resellers', function () {
  return Resellers.find();
});
Meteor.publish('inspiration', function () {
  return Inspiration.find();
});

/**
 * Publish posts with all the creators profiles
 */
Meteor.publishComposite('postsWithUsers', {
  find: function() {
    return Products.find();
  },
  children: [{
    find: function(post) {
      return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
    }
  }]
})

/**
 * Publish one post specifically with its creator profile
 */
Meteor.publishComposite('onePostWithUser', function(postId) {
  check(postId, String);
  return {
    find: function() {
      return Products.find({ url: postId });
    },
    children: [{
      find: function(post) {
        return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
      }
    }]
  }
})