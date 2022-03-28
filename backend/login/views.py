from urllib import response
from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt


# # Create your views here.
def login(request):
    if request.method == 'GET':

        db =database.connect_db()
        req = list(request.GET.items())
        try:
            id = req[0][1]
            password = req[1][1]
            name = (db.child("Data").child(id).get().val())
            ofPass = name["Password"]
            dic = {}
            if ofPass == password:
                dic["Name"] = name["Name"]
                dic["Type"] = name["Type"]
                dic["Id"] = id
        except:
            pass

        

        return render(request, 'login.html', {'data': json.dumps(dic)})





