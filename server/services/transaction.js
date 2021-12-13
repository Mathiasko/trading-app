const db = require('../db');

async function create(transaction) {
  const result = await db.query(
    `INSERT INTO transactions 
      (user_id, currency, contents) 
      VALUES 
      (?, ?, ?)`,
    [ transaction.userId, transaction.currency, transaction.contents ]
  );

  let message = 'Error in creating transaction';
    if (result.affectedRows) {
    message = 'transaction created successfully';
  }
  return { message };
}

module.exports = {
  create,
};
