import { Component, OnInit } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedCategory = '';

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.selectedCategory$.subscribe((category) => {
      this.selectedCategory = category;
    });
  }
}
