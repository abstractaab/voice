
Downloads = new orion.collection('downloads', {
  singularName: 'download', // The name of one of this items
  pluralName: 'downloads', // The name of more than one of this items
  link: {
    title: 'Downloads' 
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      orion.attributeColumn('file', 'image', 'Image'),
    ]
  }
});

Downloads.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  url: {
    type: String,
    unique: true,
  },
  image: orion.attribute('file', {
      label: 'Image',
      optional: true
  }),

  images: {
    type: [Object],
    optional: true,
  },
  "images.$.image": orion.attribute('file', {
      label: 'Upload File',
      optional: true
  }),

  pdfs: {
    type: [Object],
    optional: true,
  },
  "pdfs.$.file": orion.attribute('file', {
      label: 'Upload File',
      optional: true
  }),
  "pdfs.$.title": {
    type: String
  },

  misc: {
    type: [Object],
    optional: true,
  },
  "misc.$.files": orion.attribute('file', {
      label: 'Upload File',
      optional: true
  }),
  "misc.$.title": {
    type: String
  },


}));
