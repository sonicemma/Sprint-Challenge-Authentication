const request = require('supertest');
const db = require('../database/dbConfig');
const Users = require('../auth/auth-model');
const server = require ('../api/server');

let token;

describe("tests login and register", () => {
    
    it("tests register", async () => {});
  
    describe("should test register", () => {
      it("should register user", async () => {
        const user = { username: "zeeeeeeeee", password: "eqeeeeeq" };
        const res = await request(server)
          .post("/api/auth/register")
          .send(user);
        expect(res.status).toBe(201);
      });
  
      it("should test the login", async () => {
        const credential = { username: "aaa", password: "aaa" };
        const res = await request(server)
          .post("/api/auth/login")
          .send(credential);
        expect(res.status).toBe(200);
      });
    });
  });

  describe('jokes', () => {
    it('should require authorization', () => {
        return request(server)
            .get('/api/jokes')
            .then((response) => {
                expect(response.status).toBe(401);
            })
    })
})