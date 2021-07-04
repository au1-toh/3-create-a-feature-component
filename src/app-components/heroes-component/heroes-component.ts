import { bindable } from 'aurelia-framework';
import { Hero } from 'hero';
import { HEROES } from 'mock-heroes';

export class HeroesComponentCustomElement {

  public heroes = HEROES;
  @bindable public selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
