import request from 'supertest'
import app from '../../../infrastructure/webserver/server/app'




describe('GET /blogpost', () => {
  it('should return 200 ', async () => {
   return request(app)
      .get(`/api/v1/blogpost/`)
      .expect('Content-Type', /json/)
      .expect(200)
      
      
  })
});
describe('POST /blogpost', () => {
    it('should return error', async () => {
        const date = Date.now();
        const payload ={
            "title":"title",
            "description" :"description",
            "date_time" : date.toString()
                    };
     const req =await request(app)
        .post(`/api/v1/blogpost/`)
        .field(payload);
        expect(req.status).toBe(400)
        //expect(req.body).toBe({"message":"\"main_image\" is required"})
        
        
    })
  })

  describe('POST /blogpost', () => {
    it('should return error ', async () => {
        const date = Date.now();
        const payload ={
            "title":"title",
            "description" :"description",
            "date_time" : date.toString(),
           
                    };
     const req =await request(app)
        .post(`/api/v1/blogpost/`)
        .field(payload).attach("main_image","./test/large-image.jpg");
        expect(req.status).toBe(500);
        
        
    })
  })

  
  