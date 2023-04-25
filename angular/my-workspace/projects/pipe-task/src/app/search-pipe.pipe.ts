import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value:any,searchTerm:any):any {
    return value.filter((search: any) => search.name.toLowerCase().indexOf(searchTerm.toLowerCase())> -1 ||  search.id.toString().indexOf(searchTerm)> -1)
  }

}
