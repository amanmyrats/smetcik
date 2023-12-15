import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private data: any = null;

  public setData(data: any): any {
    this.data = data;
  }

  public getData(): any {
    const data: any = this.data;
    this.data = null;

    return data;
  }
}
