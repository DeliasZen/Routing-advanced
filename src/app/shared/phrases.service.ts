import { Injectable } from '@angular/core';
import { PHRASES } from './mock-data';
import { Phrase } from './phrase';

const phrasesPromise = Promise.resolve(PHRASES);

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  getAllPhrases(): Promise<Phrase[]> {
    return phrasesPromise
  }

getPhrase(id: number): Promise<Phrase | undefined> {
  return phrasesPromise.then(phrases => phrases.find((phrase) => phrase.id === id))
}
}
