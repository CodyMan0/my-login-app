
import { createContext } from "react";
import FirebaseApi from "./firebaseApi";
import { Subtract } from 'utility-types';


const FirebaseContext  =  createContext<FirebaseApi | null>(null);

export interface withFirebaseApiProps {
  firebaseApi : FirebaseApi
}

export const withFirebaseApi = <P extends withFirebaseApiProps> ( Component : React.ComponentType<P>) => {
  return (props : Subtract<P, withFirebaseApiProps>) => {
    <FirebaseContext.Consumer>
        {firebaseApi => <Component {...props as P} firebaseApi={firebaseApi!} />}
    </FirebaseContext.Consumer>
  }
}
export default FirebaseContext;