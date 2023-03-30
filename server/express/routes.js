const simple = require('./handlers/simple');
const configured = require('./handlers/configured');
const chats = require('./handlers/chastList');

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple);
  app.get('/configured', configured(opts));
  app.get('/chats', chats);
};
