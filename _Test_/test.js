import chai from "chai";
import supertest from "supertest";
import app from "../Backend-Express-MongoDB/index"; // Assuming your Express app is exported as 'app'

const expect = chai.expect;
const request = supertest(app);

describe("Express Server Tests", () => {
  // This hook runs before all tests
  before((done) => {
    // Add any setup code here, such as starting a MongoDB instance
    done();
  });

  // This hook runs after all tests
  after((done) => {
    // Add any teardown code here, such as stopping the MongoDB instance
    done();
  });

  // Test GET /api/buildings route
  it("GET /api/buildings should return status 200", (done) => {
    request
      .get("/api/buildings")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  // Test POST /api/buildings route
  it("POST /api/buildings should create a new building", (done) => {
    const newBuilding = {
      image_url: "example.com/image.jpg",
      Address: "123 Main St",
      Building_name: "Test Building",
      Max_Occupancy: 100,
      Current_Occupancy: 50,
      building_id: "123456",
    };

    request
      .post("/api/buildings")
      .send(newBuilding)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property("_id");
        expect(res.body.image_url).to.equal(newBuilding.image_url);
        // Add more assertions for other properties if needed
        done();
      });
  });

  // Add more tests for other routes as needed
});
