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
        id = data["id"]
        data.pop("id")
        print(data,id)
        db.child("Data").child("Users").child(id).set(data)
        return render(request, 'users.html')
    if request.method == "GET":
        db = database.connect_db()
        data = request
        id = data.GET.get('id')
        name = (db.child("Data").child("Users").child(id).get().val())
        dic = {}
        dic["Name"] = name["Name"]
        dic["Type"] = name["Type"]
        return render(request, 'users.html', {'data': json.dumps(dic)})
    if request.method == "PUT":
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        id = data["id"]
        data.pop("id")
        db.child("Data").child("Users").child(id).set(data)
        return render(request, 'users.html')

        
