export class NameValueObject extends Object {
  private value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  validate(): void {
    if (this.value.length < 0 ) {
      throw new Error("El nombre no puede ir vacio")
    }
  }
}