
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth:  750,
      unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      propList: ["*"],
      viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      exclude: [],
      landscape: false
    }
  }
}