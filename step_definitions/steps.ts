const { I } = inject();
// Add in your custom step files

let url: string;
let body: Record<string, any>;
let headers: Record<string, any>;
let response: Response;

Given('que se envia una request de login auth con usuario y contraseña correctas', () => {
  I.sendPostRequest('http://localhost:9000/api/v1/auth/login', {
    username: 'admin@gmail.com',
    password: 'Test.123',
  });
});

Given('que se envia una request de login auth con usuario correcto y contraseña incorrecta', () => {
  I.sendPostRequest('http://localhost:9000/api/v1/auth/login', {
    username: 'admin@gmail.com',
    password: 'Test.1',
  });
});

Given('la url {word}', (value: string) => {
  url = value;
  I.say('url:' + url);
});

Then('el codigo de respuesta es {int}', (value: number) => {
  I.seeResponseCodeIs(value);
});

Then('header {word} = {word}', (key: string, value: string) => {
  const header = `{"${key}":"${value}"}`;
  I.haveRequestHeaders(JSON.parse(header));
});

Then('envio peticion POST', async () => {
  if (body != null && headers != null) {
    response = await I.sendPostRequest(url, body, headers);
  } else if (body != null) {
    response = await I.sendPostRequest(url, body);
  } else {
    response = await I.sendPostRequest(url);
  }
});

Then('envio peticion GET', async () => {
  if (headers != null) {
    response = await I.sendGetRequest(url, headers);
    return;
  } 

  response = await I.sendGetRequest(url);
});

Then('body = {}', (value: string) => {
  body = JSON.parse(value);
  I.say(`body:${value}`);
});

Then('body =', (value: { content: string }) => {
  body = JSON.parse(value.content);
  I.say(`body:${body}`);
});

Then('la respuesta contiene la(s) key(s) {word}', (value: string) => {
  I.seeResponseContainsKeys(value.split('|'));
});