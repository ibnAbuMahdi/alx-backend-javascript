export default class AppController {
  static getHomepage(request, response) {
    response.status(200).set('Content-Type', 'text/plain');
    response.send('Hello Holberton School!');
  }
}
