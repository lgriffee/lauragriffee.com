export default {
  plugins: {
    autoprefixer: {},
    '@csstools/postcss-global-data': {
      files: ['app/styles/props.media.css'],
    },
    'postcss-custom-media': {},
  },
};
