import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  /* uncomment to emulate a slow connection, you will need to
   * replace heroService.getHeroes with heroService.getHeroesSlowly in 
   * AppComponent
   * */
  // getHeroesSlowly() {
  //   return new Promise<Hero[]>(resolve => 
  //     setTimeout() => resolve(HEROES), 2000) // 2 seconds
  //   );
  // }

}
