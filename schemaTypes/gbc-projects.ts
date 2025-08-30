import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gbc-projects',
  title: 'GBC Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
          hotspot: true,
        },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime',
    }),
    defineField({
      name: 'completedAt',
      title: 'Completed at',
      type: 'datetime',
    }),
    defineField({
      name: 'otherImages',
      title: 'Other images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'isMaintainanceProject',
      title: 'This is an Operations & Maintainance project',
      type: 'boolean',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
