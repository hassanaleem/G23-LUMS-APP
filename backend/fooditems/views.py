from urllib import response
from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt

def fooditems(request):
    if request.method == "POST":
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        ide = 0
        try:
            id = db.child("Data").child("foodItems").get().val()
            ide = len(id) 
        except:
            pass
        db.child("Data").child("foodItems").child(ide).set(data)

        # Adding Notifications
        data = db.child("Data").child("Notifications").get()
        for d in data.each():
            notification = "Update in Food Menu"
            try:
                x = d.val()
                x.append(notification)
                db.child("Data").child("Notifications").child(d.key()).set(x)
            except:
                x = [notification]
                db.child("Data").child("Notifications").child(d.key()).set(x)

        return render(request, 'fooditems.html')
    elif request.method == "GET":
        db = database.connect_db()
        req = request.GET
        id = req
        id = id.keys()
        id = list(id)
        id = id[0]
        if (id == "restaurants"):
            data = db.child("Data").child("foodItems").get().val()
            # get restaurant from data
            restaurants = []
            for i in data:
                if type(i) == dict:
                    restaurants.append(i["restaurant"])
            dic = {
                "restaurants": restaurants
            }
            return render(request, 'fooditems.html', {'data': json.dumps(dic)})
        elif (id == "allData"):
            data = db.child("Data").child("foodItems").get().val()
            data = list(data)
            return render(request, 'fooditems.html', {'data': json.dumps(data)})
    elif request.method == "PUT":
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data)
        id = data["id"]
        data.pop("id")
        db.child("Data").child("foodItems").child(id).set(data)

        # Adding Notifications
        data = db.child("Data").child("Notifications").get()
        for d in data.each():
            notification = "Update in Food Menu"
            try:
                x = d.val()
                x.append(notification)
                db.child("Data").child("Notifications").child(d.key()).set(x)
            except:
                x = [notification]
                db.child("Data").child("Notifications").child(d.key()).set(x)
                
        return render(request, 'fooditems.html')
        