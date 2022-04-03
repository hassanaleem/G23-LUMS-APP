from django.shortcuts import render
import database
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

@csrf_exempt

def users(request):
    if request.method == 'POST':
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        # print(data, type(data))
        # make a post request to firebase db
        # remove id from data
        id = data["id"]
        data.pop("id")
        db.child("Data").child("Users").child(id).set(data)
        return render(request, 'users.html')
    if request.method == "GET":
        db = database.connect_db()
        # get data in request
        data = request
        id = data.GET.get('id')
        name = (db.child("Data").child("Users").child(id).get().val())
        dic = {}
        dic["Name"] = name["Name"]
        dic["Type"] = name["Type"]
        return render(request, 'users.html', {'data': json.dumps(dic)})

        
