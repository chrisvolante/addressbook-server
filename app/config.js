// Exports and defines Port number, status codes, mongodb urls, and JSON webtoken secret/expiry.
module.exports = {
  PORT: process.env.PORT || 8080,
  HTTP_STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
  },
  MONGO_URL:
    process.env.MONGO_URL ||
    "mongodb://admin:password1@ds131954.mlab.com:31954/survey-server",
  TEST_MONGO_URL:
    process.env.TEST_MONGO_URL ||
    "mongodb://admin:password1@ds131954.mlab.com:31954/test-survey-server",
  JWT_SECRET: process.env.JWT_SECRET || "default",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "7d"
};
