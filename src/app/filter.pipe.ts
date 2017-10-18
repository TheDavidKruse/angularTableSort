import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: any, term: any, filterKey: string, format: string ): any {
    console.log('term is', term, 'key is', filterKey, 'format is', format);
    //check if term is undefined
    if (term === undefined) {return posts; }
    //return updated posts array
    return posts.filter((post) => {
      return post[filterKey].toString().toLowerCase().includes(term.toString().toLowerCase());
    });
  }

}
