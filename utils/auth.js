// Checks if the user is logged in 
const ensureAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = ensureAuthenticated;
