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
        id = req[0][1]
        print(id)
        if (id == 'all'):
            data = db.child("Data").child("CourseGrades").get().val()
            data = list(data)
            return render(request, 'coursegrades.html', {'data': json.dumps(data)})
        else:
            try:
                req_data = request.body.decode("utf-8")
                req_data = json.loads(data)
                course_id = req_data['courseId']
                student_id = req_data['studentId']
                key = course_id + student_id
                data = (db.child("Data").child("CourseGrades").child(key).get().val())
                dic = {}
                dic["Course ID"] = data["Course_ID"]
                dic["Grade"] = data["Grade"]
                dic["Credit Hrs"] = data["Credit_Hrs"]
                data2 = (db.child("Data").child("Courses").child(data["Course_ID"]).get().val())
                dic["Course Name"] = data2["Course_Name"]
                return render(request, 'coursegrades.html', {'data': dic})
            except:
                pass
        return render(request, 'coursegrades.html', {'data'})
    elif request.method == "POST":
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        try:
            course_id = data['courseId']
            student_id = data['studentId']
            grade = "NA"
            credithrs = db.child("Data").child("Courses").child(course_id).get().val()["creditHours"]
            key = course_id + student_id
            dic = {}
            dic["student_id"] = student_id
            dic["course_id"] = course_id
            dic["grade"] = grade
            dic["credit_hrs"] = credithrs
            db.child("Data").child("CourseGrades").child(key).set(dic)
            return render(request, 'coursegrades.html')
        except:
            pass
        return render(request, 'coursegrades.html')


    if request.method == "PUT":
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


        
