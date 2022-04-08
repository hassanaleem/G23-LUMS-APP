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
        course_id = data['course_id']
        if(len(course_id)):
            data.pop('course_id')
            db.child("Data").child("Courses").child(course_id).set(data)
            return render(request, 'courses.html')