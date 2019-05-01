const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('GET /generate endpoint', () => {
  it('should generate an array of 5', () => {
    return request(app)
      .get('/generate') // invoke the endpoint
      .query({ n: 5 }) // send the query string ?n=5
      .expect(200)  //assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array'); // make sure you get an array
        expect(res.body).to.have.lengthOf.at.least(1); // array must not be empty
        expect(res.body).to.include.members([1, 2, 3, 4]);
        expect(res.body).to.have.members([1, 2, 3, 4, 5]); // this assertion fails   
      });
  })
});