import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  posts: any[];
  postKeys: any[];
  format = 'asc';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.postKeys = Object.keys(posts[0]);
    });
  }

}

/* Currently this only works with a dataset of an array of objects [{...},{...}]
 and not an array with objects with arrays/objects as values of keys. Example currently shown with jsonplaceholder api call. */
 