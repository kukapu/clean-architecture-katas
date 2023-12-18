const passwordRegex = /^(?=.*[a-zA-Z0-9]).{9,}$/;

export class PasswordValueObject extends Object {
  private value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  validate(): boolean {
    return this.value.match(passwordRegex) === null ? false : true
  }
}