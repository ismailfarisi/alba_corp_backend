import request from 'supertest'
import app from '../../../infrastructure/webserver/server/app'




describe('Get token from Generate token API and send to Get image by token API successful Test', () => {
    let accessToken ;
  it('should return 200 & accesstoken', async () => {
   const res =await request(app)
      .get(`/api/v1/image/generate_token`).send({"image": "main_image-1676455487994-558118101.jpg"});
      expect(res.statusCode).toBe(200)
      accessToken = res.body.access_token;
      
    const resimage = await (await (await request(app).get(`/api/v1/image/get_image`)
    .set('Authorization',`Bearer ${accessToken}`)
    .send({"image":"main_image-1676455487994-558118101.jpg"})));
    expect(resimage.statusCode).toBe(200)
      
  })
});

describe('Get token from Generate token API and send to Get image by token API failed Test', () => {
    let accessToken ;
  it('should return 401 when images are different', async () => {
   const res =await request(app)
      .get(`/api/v1/image/generate_token`).send({"image": "main_image-1676455487994-558118101.jpg"});
      expect(res.statusCode).toBe(200)
      accessToken = res.body.access_token;
      
    const resimage = await (await (await request(app).get(`/api/v1/image/get_image`)
    .set('Authorization',`Bearer ${accessToken}`)
    .send({"image":"main_image-1676454909819-433889888.jpg"})));
    expect(resimage.statusCode).toBe(401)
      
  })
})