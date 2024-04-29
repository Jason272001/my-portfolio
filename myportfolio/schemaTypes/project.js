export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: false,
      },
    },

    {
      name: 'tital',
      title: 'Tital',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },

    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
}
