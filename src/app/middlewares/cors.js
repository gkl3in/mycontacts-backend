module.exports = (request, response, next) => {
  /* This is a CORS header. It allows the frontend to access the backend. */
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Origin-Methods', '*');
  response.setHeader('Access-Control-Allow-Origin-Headers', '*');
  next();
};
