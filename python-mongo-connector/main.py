# Python code to illustrate 
# Insert in MongoDB 
from pymongo import MongoClient 
  
try: 
    conn = MongoClient() 
    print("Connected successfully!!!") 
except:   
    print("Could not connect to MongoDB") 

# database 
db = conn.makeathon
  
# Created or Switched to collection names: my_gfg_collection 
collection = db.form1 
  
emp_rec1 = { 
        "name":"Mr.Geek", 
        "eid":24, 
        "location":"delhi"
        } 
emp_rec2 = { 
        "name":"Mr.Shaurya", 
        "eid":14, 
        "location":"delhi"
        } 
emp_rec3 = { 
        "name":"Mr.Coder", 
        "eid":14, 
        "location":"gurugram"
        }  
# Insert Data 
rec_id1 = collection.insert_one(emp_rec1) 
rec_id2 = collection.insert_one(emp_rec2) 
rec_id3 = collection.insert_one(emp_rec3) 
print("Data inserted with record ids",rec_id1," ",rec_id2,rec_id3) 

# Printing the data inserted 
cursor = collection.find() 
for record in cursor: 
    print(record)