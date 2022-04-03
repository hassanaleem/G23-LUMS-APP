import pyrebase

def connect_db():
  firebaseConfig = {
  'apiKey': 'AIzaSyBud-rSeyMUUoYP8AY1-bs-Hk5WdQgcz9Q',
  'authDomain' : 'lums-app.firebaseapp.com',
  'databaseURL': 'https://lums-app-default-rtdb.firebaseio.com/',
  'projectId': 'lums-app',
  'storageBucket': 'gs://lums-app.appspot.com',
  'messagingSenderId': '584724250041',
  'appId': '1:584724250041:android:4df00a06f0c290463aca68',
}

  firebase = pyrebase.initialize_app(firebaseConfig)
  authe = firebase.auth()
  return firebase.database()
# db = connect_db()
# #remove 23100321 from data
# db.child("Data").child("Users").child("23100321").remove()
# data = db.child("Data").child("Users").child("23100321").get().val()
# print(data)
