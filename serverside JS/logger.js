function logger(req, res, next) {
  console.log("== New request for:", req.url, '(', req.method, ')');
  next();
}

module.exports = logger;