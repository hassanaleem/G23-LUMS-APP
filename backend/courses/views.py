from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt

def courses(request):

    if request.method == 'POST':
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data)
        print(data)
        course_id = data['course_id']
        instructor_id = data['instructorId']
        print("instructor Id", instructor_id)
        if(len(course_id)):
            data.pop('course_id')
            users = db.child("Data").child("Users").get()
            for u in users.each():
                if u.key() == instructor_id and u.val()["Type"] == "Instructor":
                    db.child("Data").child("Courses").child(course_id).set(data)
                    return render(request, 'courses.html')
    if request.method == "GET":
        #find course with course id specified
        db = database.connect_db()
        course_id = request.GET.get('courseCode')
        print(course_id)
        if(len(course_id)):
            course = db.child("Data").child("Courses").child(course_id).get()
            course = course.val()
            dic = {}
            dic["Course_ID"] = course_id
            dic["Course_Name"] = course["name"]
            dic["Credit_Hours"] = course["creditHours"]
            dic["Instructor_ID"] = course["instructorId"]
            dic["Days"] = course["day"]
            dic["Time"] = course["timings"]
            # print(json.dumps(dic))
            return render(request, 'courses.html', {'courses': json.dumps(dic)})
        else:
            courses = db.child("Data").child("Courses").get()
            courses = courses.val()
            return render(request, 'courses.html', {'courses': json.dumps(courses)})
    if request.method == "PUT":
        db = database.connect_db()
        data = request.body.decode("utf-8")
        data = json.loads(data) 	
        course_id = data['course_id']
        if(len(course_id)):
            data.pop('course_id')
            db.child("Data").child("Courses").child(course_id).set(data)

            # Adding Notifications
            dataDB = db.child("Data").child("Notifications").get()
            for d in dataDB.each():
                notification = "Updated timings for :" + course_id
                try:
                    x = d.val()
                    x.append(notification)
                    db.child("Data").child("Notifications").child(d.key()).set(x)
                except:
                    x = [notification]
                    db.child("Data").child("Notifications").child(d.key()).set(x)

            return render(request, 'courses.html')
    # return render(request, 'courses.html')
