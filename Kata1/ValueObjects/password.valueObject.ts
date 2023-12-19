const passwordRegex = /^(?=.*[a-zA-Z0-9]).{9,}$/;

export class PasswordValueObject {
  private value: string;

  constructor(value: string) {
    this.validate()
    this.value = value;
  }

  validate(): void {
    if (this.value.match(passwordRegex) === null ) {
      throw new Error("Password no válida")
    }
  }
}