import { Pipe, PipeTransform } from '@angular/core';
import { Products } from 'src/app/core/models/products.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: Products[], name: string): Products[] {
    name = name.trim().toLowerCase();

    if (name) {
      return products.filter((o) => o.attributes.title.toLowerCase().includes(name));
    } else {
      return products;
    }
  }

}
