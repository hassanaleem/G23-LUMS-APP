import database
from datetime import datetime
import time
import pytz

db = database.connect_db()

while(True):
  timenow = datetime.now(pytz.timezone('Asia/Karachi')).strftime('%H:%M:%S')
  print(timenow)
  timmelist = timenow.split(':')
  hour = 23 - int(timmelist[0])
  minutes = 59 - int(timmelist[1])
  seconds = 59 - int(timmelist[2])
  remaining = hour*3600 + minutes*60 + seconds
  print(remaining)
  time.sleep(remaining)
  break


while(True):
  print("Started ", datetime.now(pytz.timezone("Asia/Karachi")))
  data = db.child("Data").child("Deadlines").get().val()

  new_list = []
  for d in data:
    old_date = d["Deadline_Date"].split(":")
    date_now = datetime.now(pytz.timezone("Asia/Karachi")).strftime("%d:%m:%Y").split(":")
    try:
      old_date = [int(i) for i in old_date]
      date_now  = [int(i) for i in date_now]

      if (date_now[0] > old_date[0] and date_now[1] >= old_date[1] and date_now[2] >= old_date[2]):
        pass
      else:
        new_list.append(d)
    except:
      pass
  
  db.child("Data").child("Deadlines").set(new_list)
    # stop for a day
  time.sleep(86400)


