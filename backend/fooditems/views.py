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
        # get last id from db
        id = db.child("Data").child("foodItems").get().val()
        ide = len(id) 
        db.child("Data").child("foodItems").child(ide).set(data)
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
            print(data)
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
            return render(request, 'fooditems.html', {'data': json.dumps(data)})
        