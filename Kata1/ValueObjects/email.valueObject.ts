const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export class EmailValueObject {
  private readonly value

  constructor(value: string) {
    this.validate()
    this.value = value
  }

  private validate(): boolean {
    return this.value.match(emailRegex) === null ? false : true
  }
}