import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Object[], term: any, filterKey: string, format: string ): any {
    console.log('term is', typeof(term), term, 'key is', filterKey, 'format is', format);
    //check if term is undefined

    let halfSwap = (array) => {
          let left = null;
          let right = null;
          let length = array.length;
          for (left = 0; left < length / 2; left += 1) {
              right = length - 1 - left;
              var temp = array[left];
              array[left] = array[right];
              array[right] = temp;
          }
          return array;
    };

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
        return halfSwap(posts);
      } else if (term === undefined) {
         return halfSwap(posts.sort((a, b) => {
          if (a[filterKey] < b[filterKey]) {
             return -1;
            } else if (a[filterKey] > b[filterKey]) {
              return 1;
            }else {
              return 0;
            }
        })
      );
      } else {
      return halfSwap(posts.filter((post) => {
        return post[filterKey].toString().toLowerCase().includes(term.toLowerCase());
      }).sort((a, b) => {
          if (a[filterKey] < b[filterKey]) {
             return -1;
            } else if (a[filterKey] > b[filterKey]) {
              return 1;
            }else {
              return 0;
            }
      })
    );
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
