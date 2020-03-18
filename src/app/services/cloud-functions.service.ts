import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudFunctionsService {

  constructor(
    private cloudFunc: AngularFireFunctions,
    private http: HttpClient
  ) { }

  public async selectAll(): Promise<any> {
    const result = await new Promise(resolve => {
      
      const toCall = this.cloudFunc.httpsCallable('sqlSelectAll');
      toCall({}).subscribe(res => {
        resolve(res);
      });
    })

    return Promise.resolve(result)
  }
}
