import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: any, term: any, key: string): any {
    console.log('term is', term, 'key is', key);
    //check if term is undefined
    if (term === undefined) {return posts; }
    //return updated posts array
    return posts.filter((post) => {
      return post[key].toString().includes(term.toString());
    });
  }

}
