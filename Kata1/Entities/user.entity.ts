import { EmailValueObject } from "../ValueObjects/email.valueObject";
import { NameValueObject } from "../ValueObjects/name.valueObject";
import { PasswordValueObject } from "../ValueObjects/password.valueObject";
import { usersList } from "../mocks/userList";

export class User implements User {
  id: number;
  name: NameValueObject;
  email: EmailValueObject;
  password: PasswordValueObject;

  constructor(name: string, email: string, password: string){
      this.id = usersList.length + 1;
      this.name= new NameValueObject(name)
      this.email = new EmailValueObject(email)
      this.password = new PasswordValueObject(password)
  }

  isValid() : boolean {
    try {
      this.name.validate()
      this.email.validate() 
      this.password.validate()
      return true
    } catch (error) {
      return false
    }
  }


}