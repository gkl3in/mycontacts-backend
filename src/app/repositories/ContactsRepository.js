const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Gabriel',
    email: 'gabrielklein289@hotmail.com',
    phone: '1010101010',
    category: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContactsRepository();
