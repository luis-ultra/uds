// https://styledictionary.com/reference/config/
export default {
  source: ['./src/design-system/tokens/*.json'],
  platforms: {
    json: {
      buildPath: 'src/design-system/build/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'src/design-system/build/',
      files: [
        {
          destination: 'css/tokens.css',
          format: 'css/variables',
        },
        {
          destination: 'sass/_tokens.scss',
          format: 'scss/map-deep',
        },
      ],
    },
  },
}
