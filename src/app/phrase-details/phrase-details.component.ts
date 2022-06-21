import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phrase } from '../shared/phrase';
import { PhrasesService } from '../shared/phrases.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase!: Phrase;
  constructor(private phrasesService: PhrasesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.phrase = this.phrasesService.getPhrase(2)
  }

}
