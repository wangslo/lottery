'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_API: '"/lottery"',
  API_ROOT: '"http://test-dev.dftoutiao.com"'
})
