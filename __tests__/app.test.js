const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('should GET hi', async() => {
    const res = await request(app)
      .get('/');
    expect(res.text).toEqual('hi');
  });

  it('should POST status code 200 and plain text with the request body', async() => {
    const res = await request(app)
      .post('/echo')
      .send('hi');

    expect(res.text).toEqual('hi');
  });

  it('should return HTML with word red', async() => {
    const res = await request(app)
      .get('/red');
    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('should return HTML with word green', async() => {
    const res = await request(app)
      .get('/green');
    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('should return HTML with word blue', async() => {
    const res = await request(app)
      .get('/blue');
    expect(res.text).toEqual('<h1>blue</h1>');
  });

  it('respond with Not Found for endpoints that do not exist', async() => {
    const response = await request(app)
      .get('/falseendpoint');

    expect(response.text).toEqual('Not Found');
  });

});

