import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

export const Alternative = defineDocumentType(() => ({
    name: 'Alternative',
    filePathPattern: 'data/*.mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        originalGame: { type: 'string', required: true },
        alternativeGame: { type: 'string', required: true },
        platform: { type: 'string', required: true },
        link: { type: 'string', required: true },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
    },
}))