import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug'
})
export class SlugPipe implements PipeTransform {

  // This pipe will accept the title of the blog and return the title as a URL slug.We will replace
  // the white space character between the words in the title with a ‘-’ character to create the URL
  // slug.

  transform(title: string) {
    const urlSlug = title.trim().toLowerCase().replace(/ /g, '-');
    return urlSlug;
  }

}
