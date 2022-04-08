from django.shortcuts import render
import json
import database
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt


# # Create your views here.
def events(request):
	db =database.connect_db()
	if request.method == "GET":
		data = db.child("Data").child("Events").get().val()
		data = data[1:]
		return render(request, 'events.html', {'events': json.dumps(data)})

	if request.method == "POST":
		try:
			data = json.loads(request.body.decode('utf-8'))
			try:
				oldData = db.child("Data").child("Events").get().val()
				index = len(oldData)
			except:
				index=1
    
			db.child("Data").child("Events").child(index).set(data)
		except:
			pass

		return render(request, 'events.html')








