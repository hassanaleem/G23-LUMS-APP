from os import remove
from urllib import response
from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt

def posts(request):
    if request.method == "GET": # this will handle fetching all posts and user related posts
        db = database.connect_db()
        req = list(request.GET.items())
        id = req[0][1]
        if id == "allposts": #working 
            data = db.child("Data").child("Posts").get().val()
            print(data)
            data = list(data)
            return render(request, 'posts.html', {'data': json.dumps(data)})
        else:
            data = db.child("Data").child("Posts").child(id).get().val()
            return render(request, 'posts.html', {'data': json.dumps(data)})
    elif request.method == "POST": # this will post a new post
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        userID = data["user_id"]
        data.pop("user_id")
        print(data, userID)
        ide = 0
        try:
            id = db.child("Data").child("Posts").child(userID).get().val()
            ide = len(id) 
        except:
            pass
        db.child("Data").child("Posts").child(userID).child(ide).set(data)
        return render(request, 'posts.html')
    elif request.method == "PUT": # this will update a post
        db = database.connect_db()
        req = list(request.GET.items())
        action = req[0][1]
        userId = req[1][1]
        postId = req[2][1]
        print(action, userId, postId)
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
                if like_str[-1] == ",":
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
            return render(request, 'posts.html')
        return render(request, 'posts.html')

    elif request.method == "DELETE": # this will delete a post
        db = database.connect_db()
        req = list(request.GET.items())
        id = req[0][1]
        db.child("Data").child("Posts").child(id).remove()
        return render(request, 'posts.html')
