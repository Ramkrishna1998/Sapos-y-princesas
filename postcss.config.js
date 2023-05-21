module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'tailwindcss/nesting': {},
    // 'postcss-preset-env': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
