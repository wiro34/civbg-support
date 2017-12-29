import firebase from 'firebase'

const config = {
  databaseURL: 'https://civbg-support.firebaseio.com/'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export default firebase.database()
