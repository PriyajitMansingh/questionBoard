import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {

  selectedCategory: string = '';
  filteredQuestions: any[] = [];
  users: any[] = [];

  constructor(
    private sidebarService: SidebarService,
    private questionService: QuestionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // load users once
    this.users = this.userService.getUsers();

    // listen to sidebar selection ONCE
    this.sidebarService.selectedCategory$
      .subscribe(category => {
        this.selectedCategory = category;

        const allQuestions = this.questionService.getQuestions();
        this.filteredQuestions = allQuestions.filter(
          q => q.category === category
        );
      });
  }

  onAssign(question: any) {
  const userName = prompt(
    'Assign to which user? (Rahul / Priya / Amit)'
  );

  const user = this.users.find(u => u.name === userName);

  if (user) {
    this.questionService.assignQuestion(question, user);
  } else {
    alert('User not found');
  }
}


  onEdit(question: any) {
    question.title = question.title + ' (Edited)';
  }

  onDelete(question: any) {
    this.questionService.deleteQuestion(question);

    const allQuestions = this.questionService.getQuestions();
    this.filteredQuestions = allQuestions.filter(
      q => q.category === this.selectedCategory
    );
  }
}
