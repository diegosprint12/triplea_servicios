import postcssNesting from 'postcss-nesting';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssNesting(),
    postcssPresetEnv({
      stage: 2,
      features: {
        'custom-properties': false,
      },
    }),
  ],
};