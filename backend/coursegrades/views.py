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
        if (req[0][0] == 'type'):
            gradeList = list()
            id = req[1][1]
            lenId= len(id)
            data = db.child("Data").child("CourseGrades").get()
            for grade in data.each():
                lenKey = len(grade.key())
                if (grade.key()[lenKey-lenId:] == id):
                    gradeList.append(grade.val())

            courses = db.child("Data").child("Courses").get()
            for course in courses.each():
                for grade in gradeList:
                    if (course.key() == grade['course_id']):
                        grade['course_name'] = course.val()["name"]

            return render(request, 'coursegrades.html', {'data': json.dumps(gradeList)})
        elif (id =='all_json'):
            data = db.child("Data").child("CourseGrades").get().val()
            return render(request, 'coursegrades.html', {'data': json.dumps(data)})
        else:
            try:
                data = db.child("Data").child("CourseGrades").child(id).get().val()
                data = dict(data)
                dic = {}
                dic["Course_ID"] = data["course_id"]
                dic["Grade"] = data["grade"]
                dic["Credit_Hrs"] = data["credit_hrs"]
                data2 = (db.child("Data").child("Courses").child(data["course_id"]).get().val())
                dic["Course_Name"] = data2["name"]
                # print(dic)
                return render(request, 'coursegrades.html', {'data': json.dumps(dic)})
            except:
                print("FAILED")
                pass
        return render(request, 'coursegrades.html')
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

            # adding students to course new table

            dataDB = db.child("Data").child("CourseStudents").child(course_id).get().val()
            try:
                dataDB.append(student_id)
                db.child("Data").child("CourseStudents").child(course_id).set(dataDB)
            except:
                dataDB = []
                dataDB.append(student_id)
                db.child("Data").child("CourseStudents").child(course_id).set(dataDB)


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
            fetchedData["grade"] = grade
            db.child("Data").child("CourseGrades").child(key).set(fetchedData)

            try:            
                dataDB = db.child("Data").child("Notifications").child(studentID).get().val()
                notification = "Grade Added for " + courseID

                try:
                    dataDB.append(notification)
                    db.child("Data").child("Notifications").child(studentID).set(dataDB)
                except:
                    dataDB = []
                    dataDB.append(notification)
                    db.child("Data").child("Notifications").child(studentID).set(dataDB)
            except:
                pass

            return render(request, 'coursegrades.html')
        except:
            pass


        
