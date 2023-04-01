import { using } from "rxjs";

//Extension methods for string type...
export class StringExtension {

    static toCapitalCase(text: string): string {
        let result: string = text.charAt(0).toUpperCase() + text.slice(1)
        return result;
    }
}