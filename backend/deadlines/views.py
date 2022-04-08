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
            # print(id)
            if (id == 'all'):
                data = db.child("Data").child("Deadlines").get().val()
                return render(request, 'deadlines.html', {'data': json.dumps(data)})
            else:
                data = (db.child("Data").child("Deadlines").child(id).get().val())
                dic = {}
                dic["Course ID"] = data["Course_ID"]
                dic["Deadline Title"] = data["Deadline_Title"]
                dic["Deadline Date"] = data["Deadline_Date"]
                dic["Deadline Time"] = data["Deadline_Time"]
                dic["Instructor Id"] = data["Instructor_Id"]
                # print(dic)
                return render(request, 'deadlines.html', {'data': json.dumps(dic)})

        except:
            pass
        return render(request, 'deadlines.html', {'data': json.dumps(dic)})
    elif request.method == 'POST':
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        # get last id from db
        ide = 0
        try:
            id = db.child("Data").child("Deadlines").get().val()
            ide = len(id) 
        except:
            pass
        # print("HERE", data, ide)
        db.child("Data").child("Deadlines").child(ide).set(data)
        return render(request, 'deadlines.html')

    elif request.method == 'PUT':
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data)

        existingData = db.child("Data").child("Deadlines").get().val()
        length = len(existingData)

        for i in range(length):
            # DOUBLE CHECK THIS AFTER FRONTEND CODE COMES
            if existingData[i]["Course_ID"] == data["Course_ID"] and existingData[i]["Deadline_Title"] == data["Deadline_Title"]:
                db.child("Data").child("Deadlines").child(i+1).set(data)
                return render(request, 'deadlines.html')

