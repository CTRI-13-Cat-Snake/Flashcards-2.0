const request = require('supertest');
const fs = require('fs');
// const { iteratorSymbol } = require('immer/dist/internal');

const server = "http://localhost:8080";

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      })
    })
  })
  describe('/library', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/library')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      })
    })
  })
})