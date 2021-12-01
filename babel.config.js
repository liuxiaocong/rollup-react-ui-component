
module.exports = {
  presets: [
    [
      '@babel/preset-env' // 编译 ES 代码
    ],
    '@babel/preset-typescript', // 编译 ts 代码
    '@babel/preset-react', // 编译 jsx 代码
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",  // 使用
      {
        "corejs": 3 // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
      }
    ]
  ]
};
