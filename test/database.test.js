'use strict';

const Archetype = require('archetype-js');
const Database = require('../lib/database');
const assert = require('assert');

describe('Collection', function() {
  let db;

  before(async function() {
    db = await Database.connect('mongodb://localhost:27017/monogram');

    await db.dropDatabase();
  });

  it('connects', async function() {
    assert.ok(db);

    const Test = db.collection('Test');
    assert.ok(Test.$baseAction);
  });
});