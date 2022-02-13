import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  maxPageNum: number = 5;
  data: any;
  pageId: number;
  pageData: string;

  constructor(private route: ActivatedRoute, private router: Router, private sessionSv: SessionStorageService) {
    this.route.paramMap.subscribe((elem: any) => {
      this.pageId = +elem.params.pageId;
      this.data = JSON.parse(this.sessionSv.loadData());
      if (this.data == null) {
        this.data = { ...{ [this.pageId.toString()]: '' } }
      }
      this.pageData = this.data[this.pageId.toString()];
    });

  }

  ngOnInit(): void {
  }

  onChangeData(): void {
    this.data[this.pageId] = this.pageData;
    this.sessionSv.saveData(this.data);
  }

  goPrevPage(): void {
    this.router.navigate([`page/${this.pageId - 1}`])
  }

  goNextPage(): void {
    this.router.navigate([`page/${this.pageId + 1}`])
  }

}
