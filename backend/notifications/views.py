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









