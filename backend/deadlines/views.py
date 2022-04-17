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
                
                courseList = list()
                courseStudent = db.child("Data").child("CourseStudents").get()
                for item in courseStudent:
                    if id in item.val():
                        courseList.append(item.key())

                studentDeadlines = list()
                deadlines = db.child("Data").child("Deadlines").get().val()
                for d in deadlines:
                    if d["Course_ID"] in courseList:
                        studentDeadlines.append(d)

                return render(request, 'deadlines.html', {'data': json.dumps(studentDeadlines)})


        except:
            pass
    elif request.method == 'POST':
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data)
        # get last id from db
        ide = 0

        course = db.child("Data").child("Courses").child(data["Course_ID"]).get()
        if (course.val() == None):
            return
        if (course.val()["instructorId"] != data["Instructor_Id"]):
            return
            
        try:
            id = db.child("Data").child("Deadlines").get().val()
            ide = len(id) 
        except:
            pass
        db.child("Data").child("Deadlines").child(ide).set(data)

        try:
            students = db.child("Data").child("CourseStudents").child(data['Course_ID']).get().val()
            for s in students:
                try:            
                    dataDB = db.child("Data").child("Notifications").child(s).get().val()
                    notification = "New Assignment for " + data["Course_ID"]

                    try:
                        dataDB.append(notification)
                        db.child("Data").child("Notifications").child(s).set(dataDB)
                    except:
                        dataDB = []
                        dataDB.append(notification)
                        db.child("Data").child("Notifications").child(s).set(dataDB)
                except:
                    pass
        except:
            pass

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

                try:
                    students = db.child("Data").child("CourseStudents").child(data['Course_ID']).get().val()
                    for s in students:
                        try:            
                            dataDB = db.child("Data").child("Notifications").child(s).get().val()
                            notification = "Update in deadline Assignment Title: " + data["Deadline_Title"] + " Course: " + data["Course_ID"]

                            try:
                                dataDB.append(notification)
                                db.child("Data").child("Notifications").child(s).set(dataDB)
                            except:
                                dataDB = []
                                dataDB.append(notification)
                                db.child("Data").child("Notifications").child(s).set(dataDB)
                        except:
                            pass
                except:
                    pass

                return render(request, 'deadlines.html')


