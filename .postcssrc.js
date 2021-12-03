// ESM    --> 브라우저에서 동작
// CommonJS   --> Node.js 환경

// import autoprefixer from 'autoprefixer'

// const autoprefixer = require('autoprefixer')

// export {
//   plugin: [
//     autoprefixer
//   ]
// }

// module.exports = {
//   plugin: [
//     autoprefixer
//   ]
// }

/////////////////////////////////////////
module.exports = {
  plugin: [
    require('autoprefixer')
  ]
}