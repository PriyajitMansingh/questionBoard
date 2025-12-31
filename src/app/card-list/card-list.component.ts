import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  selectedCategory: string = '';

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    // Listen to sidebar selection
    this.sidebarService.selectedCategory$
      .subscribe(category => {
        this.selectedCategory = category;
        console.log('Selected category:', category);
      });
  }
}
