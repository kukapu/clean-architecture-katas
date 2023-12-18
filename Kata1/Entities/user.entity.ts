import { EmailValueObject } from "../ValueObjects/email.valueObject";
import { NameValueObject } from "../ValueObjects/name.valueObject";
import { PasswordValueObject } from "../ValueObjects/password.valueObject";

export class User implements User {
  id: number;
  name: NameValueObject;
  email: EmailValueObject;
  password: PasswordValueObject;

  constructor(name: string, email: string, password: string){
      this.id = this.id++
      this.name = new NameValueObject(name)
      this.email = new EmailValueObject(email)
      this.password = new PasswordValueObject(password)
  }

  isValid() : boolean {
    return this.name.validate() && this.email && this.password.validate()
  }


}