'use strict'

const uniqueRandomArray = require('unique-random-array')
const nickname = require('nickname')
const emailDomains = require('./email-domains.json')

const generate = () => {
  return `${nickname.random()}@${uniqueRandomArray(emailDomains)()}`
}

exports.all = emailDomains
exports.random = uniqueRandomArray(emailDomains)
exports.generate = generate
