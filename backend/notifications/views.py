from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt


# # Create your views here.
def notifications(request):
    db =database.connect_db()
    if request.method == "GET":
        req = request.GET.get('id')
        notifications = db.child("Data").child("Notifications").child(req).get().val()
        return render(request, 'notifications.html', {'notifications': json.dumps(notifications)})

    elif request.method == "POST":
        data = request.body.decode("utf-8")
        data = json.loads(data)
        try:
            db.child("Data").child("Notifications").child(data["id"]).set("")
        except:
            pass
        
        return render(request, 'notifications.html')









