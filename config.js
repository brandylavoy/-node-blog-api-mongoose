exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://admin:admin@ds161059.mlab.com:61059/node-blog-api-mongoose';
exports.PORT = process.env.PORT || 8080;