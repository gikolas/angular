import { Action } from '@ngrx/store';
import * as getActions from './ngrx.actions';
import { Tutorial } from './interface';


// Section 1
const initialState: Tutorial = {
  amount: 10,
  ccy: 'GEL',
  year: 2,
  penalty: 140
}


export function reducer(state: Tutorial[] = [initialState], action: getActions.Actions) {

  switch (action.type) {
    case getActions.Get_Rate:
      return [...state]
    /*case getActions.Create_App:
    return 'create';
  
    case getActions.Remove_App:
    return 'remove'*/
    default:
      return state
  }
}