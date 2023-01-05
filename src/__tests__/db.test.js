// Here we will be unit testing the 3 main database functions from server/db/markets.js
const fs = require('fs');
const path = require('path');
const db = require('../db/db.js');
const pool = require('../db/pool.js');


/**
 * Like many testing frameworks, in Jest we use the "describe" function to
 * separate our tests into sections. They make your test outputs readable.
 *
 * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
 * functions inside of "describe" blocks and they will only run for tests
 * inside that describe block. You can even nest describes within describes!
 */
describe('Database Tests', () => {
  /**
   * Jest runs the "beforeAll" function once, before any tests are executed.
   * Here, we write to the file and then reset our database model. Then, we
   * invoke the "done" callback to tell Jest our async operations have
   * completed. This way, the tests won't start until the "database" has been
   * reset to an empty Array!
   */
  beforeAll(async (done) => {
    await pool.connect();
    done();
  });

  afterAll(async (done) => {
    await pool.close();
    done();
  });

  describe('createCard', () => {
    it('writes a flashcard to the database', async () => {
      
    // return await pool.request().query(`
    // BEGIN TRANSACTION
    // ${query}
    // ROLLBACK TRANSACTION
    // `);
    const mockData = {
      user_id: 1,
      title: 'Anthony',
      front: 'Brian',
      back: 'Benjamin',
      difficulty: undefined,
      hints: undefined,
      scheduled: undefined
    };

    const result = await db.createCard(mockData)
      .then((data) => {
      return data;
      console.log(data);
    })
    expect(typeof result).toBe("object");
    const { user_id, title, front, back, difficulty, hints, scheduled } = result;
    console.log(result);
    expect(user_id).toEqual('1');
    expect(title).toEqual('Anthony');
    expect(front).toEqual('Brian');
    expect(back).toEqual('Benjamin');
    expect(difficulty).toEqual('NaN');
    expect(hints).toEqual(null);
    expect(typeof scheduled).toEqual('string');
    // console.log(result);

    });
  });
});

