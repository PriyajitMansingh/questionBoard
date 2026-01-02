import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  // 🔹 This is the main data source (mock data)
  private questions = [
    {
      id: 1,
      title: 'What is Angular?',
      description: 'Explain Angular framework',
      category: 'frontend',
      assignedTo: null, // will store user object later
    },
    {
      id: 2,
      title: 'What is Angular Component?',
      description: 'Explain component concept',
      category: 'component',
      assignedTo: null,
    },
    {
      id: 3,
      title: 'What is TypeScript?',
      description: 'Explain TypeScript basics',
      category: 'angular',
      assignedTo: null,
    },
    {
      id: 4,
      title: 'What is TypeScript?',
      description: 'Explain TypeScript basics',
      category: 'angular',
      assignedTo: null,
    },
    {
      id: 5,
      title: 'What are Angular Services?',
      description: 'Explain services and DI',
      category: 'service',
      assignedTo: null,
    },
    {
      id: 6,
      title: 'What are React Hooks?',
      description: 'Explain useState and useEffect',
      category: 'hooks',
      assignedTo: null,
    },
  ];

  constructor() {}

  // 🔹 Used by CardList to get all questions
  getQuestions() {
    return this.questions;
  }

  // 🔹 Assign a question to a specific user
  assignQuestion(question: any, user: any) {
    question.assignedTo = user;
  }

  // 🔹 Delete a question
  deleteQuestion(question: any) {
    this.questions = this.questions.filter((q) => q !== question);
  }
}
