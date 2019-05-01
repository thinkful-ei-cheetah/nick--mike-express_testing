const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('GET /frequency endpoint', () => {
  it('should return an object that includes the keys unique, average, highest', () => {
    return request(app)
      .get('/frequency') // invoke the endpoint
      .query({ s: 'aaBBAAbbaa' }) // send the query string
      .expect(200)  //assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('object'); // make sure you get an object
        expect(res.body).to.not.equal({});
        expect(Object.keys(res.body)).to.not.be.empty; // object must not be empty
        expect(res.body).to.include.keys(['unique', 'average', 'highest']);
        expect(res.body).to.have.keys(['unique', 'average', 'highest', 'a', 'b']); // this assertion fails   
      });
  })
});