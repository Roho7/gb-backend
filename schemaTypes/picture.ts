import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'picture',
  title: 'Picture',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A descriptive title for the picture',
    }),
    defineField({
      name: 'route',
      title: 'Route',
      type: 'string',
      description: 'The route/page where this picture should appear (e.g., "/about", "/home")',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      description: 'The section within the page where this picture belongs (e.g., "hero", "gallery", "testimonials")',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
      description: 'The display order within the section (lower numbers appear first)',
      validation: Rule => Rule.integer().positive(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot functionality for responsive cropping
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility',
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
      subtitle: 'route',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Picture',
        subtitle: subtitle ? `Route: ${subtitle}` : '',
        media,
      }
    },
  },
})