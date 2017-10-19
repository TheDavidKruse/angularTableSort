import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Object[], term: any, filterKey: string, format: string ): any {
    console.log('term is', typeof(term), term, 'key is', filterKey, 'format is', format);
    //check if term is undefined

    switch (format) {
      case 'asc':
      if (term === undefined && filterKey === undefined) {
        return posts;
      } else if (term === undefined) {
        return posts.sort((a, b) => {
          if (a[filterKey] < b[filterKey]) {
             return -1;
            } else if (a[filterKey] > b[filterKey]) {
              return 1;
            }else {
              return 0;
            }
        });
      } else {
        return posts.filter((post) => {
          return post[filterKey].toString().toLowerCase().includes(term.toLowerCase());
        }).sort((a, b) => {
          if (a[filterKey] < b[filterKey]) {
             return -1;
            } else if (a[filterKey] > b[filterKey]) {
              return 1;
            }else {
              return 0;
            }
        });
      }


      case 'desc':
      if (term === undefined && filterKey === undefined) {
        return posts.reverse();
      } else if (term === undefined) {
        return posts.sort((a, b) => {
          if (a[filterKey] < b[filterKey]) {
             return -1;
            } else if (a[filterKey] > b[filterKey]) {
              return 1;
            }else {
              return 0;
            }
        }).reverse();
      } else {
      return posts.filter((post) => {
        return post[filterKey].toString().toLowerCase().includes(term.toLowerCase());
      }).sort((a, b) => {
          if (a[filterKey] < b[filterKey]) {
             return -1;
            } else if (a[filterKey] > b[filterKey]) {
              return 1;
            }else {
              return 0;
            }
      }).reverse();
    }


      default:
      if (term === undefined && filterKey === undefined) {
        return posts;
      } else if (term === undefined) {
        return posts.sort((a, b) => {
          if (a[filterKey] < b[filterKey]) {
             return -1;
            } else if (a[filterKey] > b[filterKey]) {
              return 1;
            }else {
              return 0;
            }
        });
      } else {
        return posts.filter((post) => {
          return post[filterKey].toString().toLowerCase().includes(term.toLowerCase());
        }).sort((a, b) => {
          if (a[filterKey] < b[filterKey]) {
             return -1;
            } else if (a[filterKey] > b[filterKey]) {
              return 1;
            }else {
              return 0;
            }
        });
      }
    }
  }
  }
