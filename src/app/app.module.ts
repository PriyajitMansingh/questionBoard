import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardListComponent } from './card-list/card-list.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { AssignQuestionModalComponent } from './assign-question-modal/assign-question-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardListComponent,
    QuestionCardComponent,
    AssignQuestionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
