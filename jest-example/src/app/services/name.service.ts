import { Injectable } from "@angular/core";

@Injectable()
export class NameService {
  private _name: string = "Matt";

  constructor() {}

  setName(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
