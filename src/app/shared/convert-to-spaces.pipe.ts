import {Pipe,PipeTransform} from '@angular/core';

@Pipe({

name:'convertToSpaces'

})

export class convertToSpacesPipe implements PipeTransform{

transform(value:string,exponent:string):string {

return value.replace(exponent,' ');

}


}