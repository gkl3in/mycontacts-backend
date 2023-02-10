module.exports = (request, response, next) => {
  /* This is a CORS header. It allows the frontend to access the backend. */
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Origin-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', 'X-PINGOTHER,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization');
  /* Setting the maximum age of the CORS header. */
  response.setHeader('Access-Control-Max-Age', '20');
  next();
};
