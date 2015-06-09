/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields 
 * we will show in the index of the collection in the admin
 */
Inspiration = new orion.collection('inspiration', {
  singularName: 'inspiration', // The name of one of this items
  pluralName: 'inspiration', // The name of more than one of this items
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: 'Inspiration' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      orion.attributeColumn('file', 'image', 'Image')
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */

Inspiration.attachSchema(new SimpleSchema({
  image: orion.attribute('file', {
      label: 'Image',
      optional: true
  })
}));