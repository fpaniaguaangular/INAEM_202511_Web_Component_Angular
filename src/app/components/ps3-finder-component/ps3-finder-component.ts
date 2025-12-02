import { Component, computed, effect, inject, signal } from '@angular/core';
import { Ps3LoaderService } from '../../services/ps3-loader-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ps3-finder-component',
  imports: [FormsModule],
  templateUrl: './ps3-finder-component.html',
  styleUrl: './ps3-finder-component.css',
})
export class Ps3FinderComponent {
  private ps3LoaderService = inject(Ps3LoaderService);
  public ps3Covers: any = null;
  public selectedPs3Covers = signal<any[] | null>(null);
  public gameTitle: string = "";
  public gamesCounter = 
    computed(() => this.selectedPs3Covers()?.length ?? 0);
  constructor() {
    effect(() => {
      this.ps3Covers = this.ps3LoaderService.ps3GamesData();
      console.log(this.ps3Covers);
      this.selectedPs3Covers.set(this.ps3Covers);
    });
  }
  filtrar() {
    this.selectedPs3Covers.
      set(this.ps3Covers.filter((game: any) => 
        game.Game.toLowerCase().includes(this.gameTitle.toLowerCase())));
  }
}
