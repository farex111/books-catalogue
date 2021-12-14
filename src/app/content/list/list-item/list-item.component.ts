import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookListItem } from '../../models/content.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item: BookListItem | undefined;
  constructor(private router: Router) {}
  goToDetails() {
    this.router.navigate([`content/${this.item?.data.id}`]);
  }

  ngOnInit() {}
}
