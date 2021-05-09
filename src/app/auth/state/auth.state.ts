import { User } from './../../models/User.model';
export interface authState{
  user:User|null
}

export const authInitialState:authState={
    user:null
    
}