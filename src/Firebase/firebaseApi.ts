import {firebaseConfig} from './firebaseConfig'
import {FirebaseApp,initializeApp} from 'firebase/app';
import {Analytics, getAnalytics} from 'firebase/analytics'
import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  Unsubscribe,
  User
} from 'firebase/auth'


export default class FirebaseApi {
  app :FirebaseApp
  analytics: Analytics
  auth: Auth
  googleAuthProvider: GoogleAuthProvider

  constructor() {
    this.app = initializeApp(firebaseConfig)
    this.analytics =  getAnalytics(this.app)
    this.auth = getAuth(this.app)
    this.googleAuthProvider = new GoogleAuthProvider()
  }
}