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
        const payload = {
            "title": "title",
            "description": "description",
            "date_time": date.toString()
        };
        const req = await request(app)
            .post(`/api/v1/blogpost/`)
            .field(payload);
        expect(req.status).toBe(400)
        //expect(req.body).toBe({"message":"\"main_image\" is required"})


    })
})

describe('POST /blogpost', () => {
    it('should return error ', async () => {
        const date = Date.now();
        const payload = {
            "title": "title",
            "description": "description",
            "date_time": date.toString(),

        };
        const req = await request(app)
            .post(`/api/v1/blogpost/`)
            .field(payload).attach("main_image", "./test/large-image.jpg");
        expect(req.status).toBe(500);


    })
})


describe('Add full blog post fields with ISO date_time', () => {
    it('should return error if date is in iso', async () => {
        const date = Date.now();
        const payload = {
            "title": "title",
            "description": "description",
            "date_time": "+055094-03-22T05:49:33.000Z",

        };
        const req = await request(app)
            .post(`/api/v1/blogpost/`)
            .field(payload).attach("main_image", "./test/large-image.jpg");
        expect(req.status).toBe(500);


    })
})

describe('Add blog post then Get all blog posts failed Test', () => {
    it('should return error if date is in iso', async () => {
        const date = Date.now();
        const payload = {
            "title": "test123",
            "description": "test123",
            "date_time": date,

        };
        const resPost = await request(app)
            .post(`/api/v1/blogpost/`)
            .field(payload).attach("main_image", "./test/large-image.jpg");
        expect(resPost.status).toBe(500);
        const resGet = await request(app).get(`/api/v1/blogpost/`);
        const list = resGet.body as Array<any>;

        const testData = {
            "title": "test123",
            "description": "test123",
            "date_time": date,
            "main_image": `large-image-${date}.jpg`
        }
        expect(list).toContain(testData)



    })



})



