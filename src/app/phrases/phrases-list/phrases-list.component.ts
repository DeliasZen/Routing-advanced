import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase';
import { PhrasesService } from '../../shared/phrases.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

phrases!: Phrase[]
private selectedID!: number

  constructor(
    private phrasesService: PhrasesService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedID = +params['id']

      this.phrasesService
      .getAllPhrases()
      .then(res => this.phrases = res)
    })
  }

  onSelect(phrase: Phrase): void {
    this.router.navigate(['phrases', phrase.id]).then()
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID
  }
}
