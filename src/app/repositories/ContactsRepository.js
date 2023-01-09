const db = require('../../database');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    select  contacts.*,
            categories.name category_name
    from    Contacts
    left join categories on categories.id = contacts.category_id
    order by contacts.name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    select  contacts.*,
            categories.name category_name
    from  Contacts
    left join categories on categories.id = contacts.category_id
    where Contacts.id = $1
    `, [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('select  * from Contacts where email = $1', [email]);
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts (name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    returning *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      update contacts
      SET name = $1,
          email = $2,
          phone = $3,
          category_id = $4
      where id = $5
      returning *
    `, [name, email, phone, category_id, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
    delete from contacts
    where id = $1
    `, [id]);
    return deleteOp;
  }
}

module.exports = new ContactsRepository();
