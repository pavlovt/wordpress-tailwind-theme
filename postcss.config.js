module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('@fullhuman/postcss-purgecss')({
    //   content: [
    //     '**/*.twig',
    //     '**/*.php'
    //   ],
    //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    // })
  ]
}