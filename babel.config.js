module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module:react-native-dotenv",
      {
        moduleName: "react-native-dotenv",
        path: ".env.development",
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      "module-resolver",
      {
        alias: {
          "~": "./src",
        },
      },
    ],
  ],
};
