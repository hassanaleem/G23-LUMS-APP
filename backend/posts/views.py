from os import remove
from urllib import response
from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt

def posts(request):
    if request.method == "GET": # this will handle fetching all posts and user related posts
        req = list(request.GET.items())
        id = req[0][1]
        if id == "all": #working 
            db = database.connect_db()
            data = db.child("Data").child("Posts").get().val()
            data = dict(data)
            return render(request, "posts.html", {"data": json.dumps(data)})
    elif request.method == "POST": # this will post a new post
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        userID = data["user_id"]
        data.pop("user_id")
        ide = 0
        try:
            id = db.child("Data").child("Posts").child(userID).get().val()
            ide = len(id) 
        except:
            pass
        db.child("Data").child("Posts").child(userID).child(ide).set(data)

        username = db.child("Data").child("Users").child(userID).get().val()["Name"]
        dataDB = db.child("Data").child("Notifications").get()
        for d in dataDB.each():
            if d.key() == userID:
                continue
            notification = "New Post in your wall by " + username
            try:
                x = d.val()
                x.append(notification)
                db.child("Data").child("Notifications").child(d.key()).set(x)
            except:
                x = [notification]
                db.child("Data").child("Notifications").child(d.key()).set(x)

        return render(request, 'posts.html')
    elif request.method == "PUT": # this will handle like, unlike, comment
        db = database.connect_db()
        req = list(request.GET.items())
        action = req[0][1]
        userId = req[1][1]
        postId = req[2][1]
        if action == "like":
            msg = request.body.decode("utf-8")
            msg = json.loads(msg)
            new_id = msg["liker_id"]
            data = db.child("Data").child("Posts").child(userId).child(postId).get().val()
            like_str = data["liker_id"]
            if (like_str == ""):
                like_str = new_id
            else:
                like_str = like_str + "," + new_id
            data["liker_id"] = like_str
            db.child("Data").child("Posts").child(userId).child(postId).set(data)

            
            # try:
            if userId == new_id:
                return render(request, 'posts.html')

            dataDB = db.child("Data").child("Notifications").child(userId).get().val()
            likername = db.child("Data").child("Users").child(new_id).get().val()["Name"]
            notification = "New like by " + likername
            try:
                dataDB.append(notification)
                db.child("Data").child("Notifications").child(userId).set(dataDB)
            except:
                dataDB = []
                dataDB.append(notification)
                db.child("Data").child("Notifications").child(userId).set(dataDB)

            return render(request, 'posts.html')
        elif action == "unlike":
            msg = request.body.decode("utf-8")
            msg = json.loads(msg)
            removal_id = msg["liker_id"]
            data = db.child("Data").child("Posts").child(userId).child(postId).get().val()
            like_str = data["liker_id"]
            if removal_id in like_str:
                like_str = like_str.replace(removal_id+",", "")
                like_str = like_str.replace(removal_id, "")
                if len(like_str) != 0 and like_str[-1] == ",":
                    like_str = like_str[:-1]
            data["liker_id"] = like_str
            db.child("Data").child("Posts").child(userId).child(postId).set(data)
            return render(request, 'posts.html')
        elif action == "comment":
            msg = request.body.decode("utf-8")
            msg = json.loads(msg)
            comment = msg["comment"]
            data = db.child("Data").child("Posts").child(userId).child(postId).get().val()
            comment_str = data["comments"]
            if (comment_str == ""):
                comment_str = comment
            else:
                comment_str = comment_str + "," + comment
            data["comments"] = comment_str
            db.child("Data").child("Posts").child(userId).child(postId).set(data)

            if userId == msg["commenter"]:
                return render(request, 'posts.html')

            dataDB = db.child("Data").child("Notifications").child(userId).get().val()
            likername = db.child("Data").child("Users").child(msg["commenter"]).get().val()["Name"]
            notification = "New comment by " + likername
            try:
                dataDB.append(notification)
                db.child("Data").child("Notifications").child(userId).set(dataDB)
            except:
                dataDB = []
                dataDB.append(notification)
                db.child("Data").child("Notifications").child(userId).set(dataDB)

            return render(request, 'posts.html')
        elif action == "deletecomment":
            msg = request.body.decode("utf-8")
            msg = json.loads(msg)
            comment = msg["comment"]
            data = db.child("Data").child("Posts").child(userId).child(postId).get().val()
            comment_str = data["comments"]
            if comment in comment_str:
                comment_str = comment_str.replace(comment+",", "")
                comment_str = comment_str.replace(comment, "")
                if len(comment_str) and comment_str[-1] == ",":
                    comment_str = comment_str[:-1]
            data["comments"] = comment_str
            db.child("Data").child("Posts").child(userId).child(postId).set(data)
            return render(request, 'posts.html')

    elif request.method == "DELETE": # this will delete a post
        db = database.connect_db()
        req = list(request.GET.items())
        userid = req[0][1]
        postid = req[1][1]
        db.child("Data").child("Posts").child(userid).child(postid).remove()
        #reduce post id of all posts greater than post id
        data = db.child("Data").child("Posts").child(userid).get().val()
        print(data, len(data))
        for i in range(int(postid), len(data)-1):
            data[i] = data[i+1]
        #delete last element
        del data[len(data)-1]
        db.child("Data").child("Posts").child(userid).set(data)
        return render(request, 'posts.html')
