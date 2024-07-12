import db from './db.json' with { type: "json" }

const getAllUsers = () => {
  return db.users
}

export { getAllUsers }
