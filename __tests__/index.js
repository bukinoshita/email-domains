'use strict'

import test from 'ava'
import {all, random, generate} from './..'

test('should have 12 email domains', t => {
  t.true(all.length === 12)
})

test('should return a random email domain', t => {
  t.truthy(random())
  t.not(random(), random())
})

test('should return a random email', t => {
  t.truthy(generate())
  t.not(generate(), generate())
})
