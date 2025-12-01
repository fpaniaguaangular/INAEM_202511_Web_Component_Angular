import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Ps3LoaderService {
  private PS3_URL : string = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_ps3/ps3_covers.json';
  private httpClient = inject(HttpClient);
  getData(){
    return this.httpClient.get(this.PS3_URL);
  }
}
