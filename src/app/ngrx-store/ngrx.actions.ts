import { Action } from '@ngrx/store';
import { Tutorial } from './interface';
export const Get_Rate = 'Get_Rate';
export const Create_App = 'Create_App';
export const Remove_App = 'Remove_App';


export class GetRate {
    readonly type = Get_Rate;

}

export class CreateApp {
    readonly type = Create_App;

}


export class RemoveApp {
    readonly type = Remove_App;

}

export type Actions = GetRate | CreateApp | RemoveApp;