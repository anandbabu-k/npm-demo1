const request = require('supertest');
const {User}  = require('../../models/user');

describe('auth middleware', () => {

    beforeEach(() => {server = require('../../index')})
    afterEach(async () => { server.close(); });

    let token;

    const exec = () => {
        return   request(server).post('/api/genres').set('x-auth-token', token).send({name: 'genre1'});
    }

    beforeEach(() => {
        token = new User().generateAuthToken();
    })

    it('should return 401 if no token is provided', async () => {
        token = '';
        await exec();
        expect(res.status).toBe(401);
    })


})