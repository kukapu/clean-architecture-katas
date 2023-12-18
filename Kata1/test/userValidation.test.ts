import { User } from "../Entities/user.entity"

describe('user validation', () => {
  const user1 = new User('JuanLukitas', 'Juanlu@kitas.com', 'password2');
  

  test('user must have name, email, and password', () => {
    // Suponiendo que la clase User tiene getters o las propiedades son accesibles públicamente
    expect(user1.name).toEqual({value: 'JuanLukitas'});
    expect(user1.email).toEqual({value: 'Juanlu@kitas.com'});
    expect(user1.password).toEqual({value: 'password2'});
  });

  // Si quieres probar que un usuario no es válido, necesitarías una forma de verificar la validez
  // Por ejemplo, si tienes un método isValid() en la clase User:
  const user2 = new User('', '', '');
  test('user with empty fields is not valid', () => {
    expect(user2.isValid()).toBeFalsy;
  });

  test('email and password must be valid', () => {

    expect(user1.email).toBeTruthy;
    expect(user1.password.validate()).toBeTruthy;
  })

  const user3 = new User('Albertiko', 'Juanlu@kitas.com', 'password2')
  test('same email and password in different instances must be equal', () => {
    // toEqual porque no son misma referencia en memoria
    expect(user1.email).toEqual(user3.email)
    expect(user1.password).toEqual(user3.password)
  })

  test('Different instances of user with same id', () => {
    expect(user1.id).toBe(user3.id)
  })
});