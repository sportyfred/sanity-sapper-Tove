export default {
  name: 'frontpageReference',
  type: 'object',
  title: 'Frontpage reference',
  fields: [
    {
      name: 'frontpage',
      type: 'reference',
      to: [
        {
          type: 'frontpage'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'frontpage.name',
      media: 'frontpage.image.asset'
    }
  }
}
