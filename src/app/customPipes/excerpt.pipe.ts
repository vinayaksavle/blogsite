import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  // This pipe will accept the contents of the blog as a string and return the first 300 characters as
  // the summary of the blog. Since the content of the blog is in HTML format, we will remove
  // all the HTML tags before extracting the summary.

  transform(content: string) {
    const postSummary = content.replace(/(<([^>]+)>)/ig, '');
    if (postSummary.length > 300) {
      return postSummary.substr(0, 300) + ' [...]';
    } else {
      return postSummary;
    }
  }

}
