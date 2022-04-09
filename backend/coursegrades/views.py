from urllib import response
from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt

def coursegrades(request):
    if request.method == "GET":
        db = database.connect_db()
        req = list(request.GET.items())
        try:
            id = req[0][1]
            data = (db.child("Data").child("CourseGrades").child(id).get().val())
            dic = {}
            dic["Course ID"] = data["Course_ID"]
            dic["Grade"] = data["Grade"]
            dic["Credit Hrs"] = data["Credit_Hrs"]
            data2 = (db.child("Data").child("Courses").child(data["Course_ID"]).get().val())
            dic["Course Name"] = data2["Course_Name"]
        except:
            pass
        return render(request, 'coursegrades.html', {'data': json.dumps(dic)})

    if request.method == "POST":
        db = database.connect_db()
        data = json.loads(request.body.decode('utf-8'))
        courseID = data["Course_ID"]
        grade = data["Grade"]
        studentID = data["Student_ID"]
        key = courseID + studentID
        if(len(key) == 0):
            return

        try:
            fetchedData = db.child("Data").child("CourseGrades").child(key).get().val()
            fetchedData["Grade"] = grade
            db.child("Data").child("CourseGrades").child(key).set(fetchedData)
            return render(request, 'coursegrades.html')
        except:
            pass


        
