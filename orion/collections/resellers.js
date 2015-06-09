/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields 
 * we will show in the index of the collection in the admin
 */
Resellers = new orion.collection('resellers', {
  singularName: 'reseller', // The name of one of this items
  pluralName: 'resellers', // The name of more than one of this items
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: 'Resellers' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "name", title: "name" },
      { data: "country", title: "country" },
      { data: "city", title: "city" },
      { data: "address", title: "address" },
      { data: "phone", title: "phone" },
      { data: "email", title: "email" },
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */

Resellers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    optional: true,
    unique: false,
  },
  country: {
    type: String,
    optional: true,
    unique: false,
  },
  city: {
    type: String,
    optional: true,
    unique: false,
  },
  zaddress: {
    type: String,
    optional: true,
    unique: false,
  },
  zphone: {
    type: String,
    optional: true,
    unique: false,
  },
  zemail: {
    type: String,
    optional: true,
    unique: false,
  },
}));