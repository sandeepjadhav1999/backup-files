import { AbstractControl, ValidatorFn } from "@angular/forms";

export function emailValidtor(): ValidatorFn
{
    return (control : AbstractControl) : {[key : string]: boolean} | null =>{
        if(control.value?.includes('@ascendion') || control.value?.includes('@collabera') ){
            return null
        }else{
            return {"emailNotAllowed":true}
        }
    }
}