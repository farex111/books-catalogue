import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading$: Observable<boolean> | null = null;
  constructor(private LoadingService: LoadingService) {}

  ngOnInit() {
    this.loading$ = this.LoadingService.loading$;
  }
}
