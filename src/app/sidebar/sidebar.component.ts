import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isOpen = true;
  selectedCategory = '';
  openSubMenu: string | null = null;

  menu = [
    { name: 'Frontend', key: 'frontend' },

    {
      name: 'Angular',
      key: 'angular',
      children: [
        { name: 'Components', key: 'component' },
        { name: 'Services', key: 'service' },
        { name: 'RxJS', key: 'rxjs' },
      ],
    },

    {
      name: 'React',
      key: 'react',
      children: [
        { name: 'Hooks', key: 'hooks' },
        { name: 'State', key: 'state' },
      ],
    },

    { name: 'Backend', key: 'backend' },
    { name: 'Database', key: 'database' },
  ];

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.selectedCategory$.subscribe((cat: string) => {
      this.selectedCategory = cat;
    });
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleSubMenu(key: string) {
    this.openSubMenu = this.openSubMenu === key ? null : key;
  }

  select(key: string) {
    this.sidebarService.selectCategory(key);
  }
}
