// https://styledictionary.com/reference/config/
export default {
  source: ['./src/design-system/tokens/*.json'],
  platforms: {
    json: {
      buildPath: 'src/design-system/nebula/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'src/design-system/nebula/',
      files: [
        {
          destination: 'css/tokens.css',
          format: 'css/variables',
        },
        {
          destination: 'scss/tokens.scss',
          format: 'scss/map-deep',
        },
      ],
    },
  },
}
