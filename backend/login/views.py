from urllib import response
from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt


# # Create your views here.
def login(request):
    db =database.connect_db()
    print("request", request.method)

    if request.method == 'GET':
        name = db.child("Data").get().val()
        x = render(request, 'login.html', {'data': json.dumps(name)})
        print(x)
        return x

    elif request.method == "POST":
        data = {"name": "Abdullah"}
        results = db.child("Data").child("3").set(data)
        print("results", results)
        return render(request, 'login.html')




