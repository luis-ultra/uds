import StyleDictionary from 'style-dictionary'
import config from './config.js'

console.log('Build started...')

// Register the custom transform
console.log('Registering custom transform...')
StyleDictionary.registerTransform({
  name: 'fixFontWeight',
  type: 'value',
  filter: function (token) {
    return token.type === 'dimension'
  },
  transform: function (token) {
    const hasFontAndWeight = token.path.includes('font') && token.path.includes('weight')
    if (hasFontAndWeight) {
      return `${token.value?.replace('px', '')}`
    } else {
      return `${token.value}`
    }
  },
})

console.log('Applying configuration...')
// Apply the configuration
const sd = new StyleDictionary(config)

// Build all platforms
sd.buildAllPlatforms()
