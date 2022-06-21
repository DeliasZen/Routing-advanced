import { Injectable } from '@angular/core';
import { PHRASES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  getAllPhrases() {
    return PHRASES
  }

  getPhrase(id:number) {
    return PHRASES[id]
  }
}
