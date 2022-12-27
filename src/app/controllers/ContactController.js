const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  index(request, response) {
    // listar todos os registros
    const contacts = ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
