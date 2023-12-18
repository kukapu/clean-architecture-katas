import { EmailValueObject } from "../ValueObjects/email.valueObject";
import { NameValueObject } from "../ValueObjects/name.valueObject";
import { PasswordValueObject } from "../ValueObjects/password.valueObject";

export interface User {
  name: NameValueObject;
  email: EmailValueObject;
  password: PasswordValueObject;

  isValid: () => boolean;

  
}