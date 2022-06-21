import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'phrases', component: PhrasesListComponent},
  {path: 'phrase', component: PhraseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
