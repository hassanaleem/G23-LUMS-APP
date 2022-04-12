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
            if req[0][0] == 'type':
                courseid = req[1][1]
                instructorid = req[2][1]
                data = db.child("Data").child("Deadlines").get().val()
                arr = list()
                flag = False
                for d in data:
                    if d['Course_ID'] == courseid and d['Instructor_Id'] == instructorid:
                        arr.append(d)
                    if d['Course_ID'] == courseid and d['Instructor_Id'] != instructorid:
                        flag = True
                        
                if(flag == False):
                    return render(request, 'deadlines.html', {'data': json.dumps(arr)})

                if flag == True:
                    return

            else:
                id = req[0][1]
                if (id == 'all'):
                    data = db.child("Data").child("Deadlines").get().val()
                    return render(request, 'deadlines.html', {'data': json.dumps(data)})
                else:
                    data = db.child("Data").child("Deadlines").get().val()
                    temp = list()
                    for d in data:
                        if d['Course_ID'] == id:
                            temp.append(d)
                    return render(request, 'deadlines.html', {'data': json.dumps(temp)})
        except:
            pass
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
        db.child("Data").child("Deadlines").child(ide).set(data)

        return render(request, 'deadlines.html')

    elif request.method == 'PUT':
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data)

        existingData = db.child("Data").child("Deadlines").get().val()
        length = len(existingData)

        
        for i in range(length):
            if existingData[i]["Course_ID"] == data["Course_ID"] and existingData[i]["Deadline_Title"] == data["Deadline_Title"] and existingData[i]["Deadline_Date"] == data["Deadline_Date"] and existingData[i]["Deadline_Time"] == data["Deadline_Time"] and existingData[i]["Instructor_Id"] == data["Instructor_Id"]:

                existingData[i]["Deadline_Date"] = data["newDate"]
                existingData[i]["Deadline_Time"] = data["newTime"]
                db.child("Data").child("Deadlines").child(i).set(existingData[i])
                return render(request, 'deadlines.html')


