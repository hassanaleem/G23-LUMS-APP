from urllib import response
from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt

def deadlines(request):
    if request.method == 'GET':
        db =database.connect_db()
        req = list(request.GET.items())
        try:
            id = req[0][1]
            data = (db.child("Data").child("Deadlines").child(id).get().val())
            dic = {}
            dic["Course ID"] = data["Course_ID"]
            dic["Deadline Title"] = data["Deadline_Title"]
            dic["Deadline Date"] = data["Deadline_Date"]
            dic["Deadline Time"] = data["Deadline_Time"]
            dic["Instructor Id"] = data["Instructor_Id"]
        except:
            pass
        return render(request, 'login.html', {'data': json.dumps(dic)})
    elif request.method == 'POST':
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        # get last id from db
        id = db.child("Data").child("Deadlines").get().val()
        ide = len(id) 
        db.child("Data").child("Deadlines").child(ide).set(data)
        return render(request, 'deadlines.html')
