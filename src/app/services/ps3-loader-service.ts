import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Ps3LoaderService {
  private PS3_URL: string = 'https://fpaniaguaangular.github.io/gamesdb/PS4Games.json';
  private httpClient = inject(HttpClient);
  public ps3GamesData = signal<any[]>([]);
  constructor() {
    this.httpClient.get(this.PS3_URL).subscribe((data: any) => {
      this.ps3GamesData.set(data);
    })
  }
}
