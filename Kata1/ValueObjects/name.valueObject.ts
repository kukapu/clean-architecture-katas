export class NameValueObject extends Object {
  private value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  validate(): boolean {
    return this.value.length > 0;
  }
}