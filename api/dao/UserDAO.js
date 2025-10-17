const User = require("../models/User");
const GlobalDAO = require("./GlobalDAO");

/**
 * Data Access Object (DAO) for the User model. 
 *
 * Extends the generic {@link GlobalDAO} class to provide
 * database operations (create, read, update, delete, getAll)
 * specifically for User documents.
 */
class UserDAO extends GlobalDAO {
  /**
   * Create a new UserDAO instance.
   *
   * Passes the User Mongoose model to the parent class so that
   * all inherited CRUD methods operate on the User collection.
   */
  constructor() {
    super(User);
  }

    async findByEmail(email) {
    return User.findOne({ email });
  }
}

/**
 * Export a singleton instance of UserDAO.
 *
 * This ensures the same DAO instance is reused across the app,
 * avoiding redundant instantiations and keeping data operations
 * consistent throughout the project.
 */
module.exports = new UserDAO();