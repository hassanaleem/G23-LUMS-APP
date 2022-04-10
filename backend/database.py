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

# # delete all elements of coursegrade
# db = connect_db()
# data = db.child("Data").child("Notifications").get()
# for d in data.each():
#   try:
#     x = d.val()
#     x.append("newUpdate")
#     db.child("Data").child("Notifications").child(d.key()).set(x)
#   except:
#     x = ["newUpdate"]
#     db.child("Data").child("Notifications").child(d.key()).set(x)
# print(users_by_score)



# data = db.child("Data").child("Users").get()
# li = dict()
# for user in data.each():
#     if user.val()["Type"] == "Student":
#       li[user.key()] = ""
# print(li)

# db.child("Data").child("Notifications").set(li)
