const request = require('supertest');
const fs = require('fs');
const express = require('express');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../../secrets.js');
// const { iteratorSymbol } = require('immer/dist/internal');

const app = express();

const TOKEN = '116844415981086574718';


const server = "http://localhost:3000";

xdescribe('Route integration', () => {
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
})

// describe('POST /library', async () => {
//   it('responds with 200' , async () => {
//     const responce = await request(app)
//       .post('/library')
//       .set('Authorization', `Bearer ${TOKEN}`)
//       .expect(200);
//   } );
// });

// describe('Authenticated routes', )


// describe('Google Oauth2 authenticated routes', () => {
//   it('protected route', async() => {
//     const response = await request('http://localhost:8080/auth/google/callback')
//       .post('/token')
//       .send({
//         grant_type: 'client_credentials',
//         client_id: GOOGLE_CLIENT_ID,
//         client_secret: GOOGLE_CLIENT_SECRET
//       });
//     const accessToken = response.body.access_token;

//     const apiResponse = await request(app)
//       .get('/library')
//       .set('Authorization', `Bearer ${accessToken}`);
//     expect(apiResponse.status).toBe(200);
//   })
// }) 
