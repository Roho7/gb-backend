import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'documents',
  title: 'Documents',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A descriptive title for the picture',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'The category of the document (e.g., "newsletter", "press release", "annual report")',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption to display with the image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'file',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Document',
        subtitle: subtitle ? `Category: ${subtitle}` : '',
        media,
      }
    },
  },
})