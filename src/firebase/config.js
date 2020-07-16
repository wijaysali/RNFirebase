import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDl3V9W0rYtvy7naHfpGsMDZmt1yKDg8bU",
  authDomain: "rnfirebase-1c8eb.firebaseapp.com",
  databaseURL: "https://rnfirebase-1c8eb.firebaseio.com",
  projectId: "rnfirebase-1c8eb",
  storageBucket: "rnfirebase-1c8eb.appspot.com",
  messagingSenderId: "156176418219",
  appId: "1:156176418219:web:a6ace49046c7b77df77eee"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
