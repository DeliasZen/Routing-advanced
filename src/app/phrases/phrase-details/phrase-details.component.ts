import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { CanComponentDeactivate } from 'src/app/shared/can-deactivate.guard';
import { Phrase } from '../../shared/phrase';
import { PhrasesService } from '../../shared/phrases.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit, CanComponentDeactivate {

  phrase!: Phrase
  editValue!: string
  editLanguage!: string

  constructor(
    private phrasesService: PhrasesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService) { 
    }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.phrase = data['phrase']
        this.editLanguage = this.phrase.language
        this.editValue = this.phrase.value
      }
    })
  }

  gotoPhrasesList(): void {
    this.router.navigate(['../', {id: this.phrase.id, param1: 'test', param2: 123}], {relativeTo: this.activatedRoute}).then()
  }

  isChanged(): boolean {
    return !(this.phrase?.value === this.editValue && this.phrase?.language === this.editLanguage)
  }

  save(): void {
    if (this.phrase) {
      this.phrase.value = this.editValue
      this.phrase.language = this.editLanguage
    }
  }

  canDeactivate(): boolean {
    if (!this.phrase) return true
    if (!this.isChanged()) return true

    return confirm('Вы не сохранили изменения. \nДанные будут потеряны. \nУйти со страницы в любом случае?')
  }

}
