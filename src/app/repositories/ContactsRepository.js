const { v4 } = require('uuid');

const db = require('../../database');

let contacts = [
  {
    id: v4(),
    name: 'Gabriel',
    email: 'gabrielklein289@hotmail.com',
    phone: '1010101010',
    category: v4(),
  },
  {
    id: v4(),
    name: 'S4ds',
    email: 'gklein@hotmail.com',
    phone: '1010101010',
    category: v4(),
  },
];

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`select  * from Contacts order by name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('select  * from Contacts where id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('select  * from Contacts where email = $1', [email]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
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

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
