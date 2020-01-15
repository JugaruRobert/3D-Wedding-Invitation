import { Pipe, PipeTransform } from '@angular/core';
import * as guestNameJSON from "./guestNameMappings.json";

@Pipe({name: 'envelopeTextPipe'})
export class EnvelopeTextPipe implements PipeTransform {
  transform(pathname: string): string {
    var guestNameMappings = guestNameJSON["default"];
    if(pathname)
    {
        if(pathname.substr(0,5) == "/url/")
            return pathname.substr(5, pathname.length)
                               .split("-").join(" ")
                               .split("and").join("&")
                               .split("l").join("-");

        var urlName = pathname.substr(1).toLowerCase();
        var nameMapping = guestNameMappings[urlName];
        if(nameMapping)
            return nameMapping;
    }
    return guestNameMappings["defaultText"];
  }
}