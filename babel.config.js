module.exports = function (api) {
  api.cache(true);

  const presets = ["babel-preset-expo"];

  return {
    presets,
    plugins: ["expo-router/babel", "nativewind/babel"],
  };
};
