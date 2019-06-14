# mongo.py

from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
import json

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'makeathon'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/makeathon'

mongo = PyMongo(app)

@app.route('/form', methods=['GET'])
def get_all_forms():
  #forms is collection name
  form = mongo.db.forms
  output = []
  for s in form.find():
    output.append({'form_name' : s['form_name'], 'field_name' : s['field_name'],'coordinates':s['coordinates']})
  return jsonify({'result' : output})

@app.route('/data')
def get_one_form():
  formName = request.args.get('form_name')
  fieldName = request.args.get('field_name')
  
  form = mongo.db.forms
  s = form.find_one({"form_name": formName, "field_name": fieldName})

  if s:
    output = {'form_name' : s['form_name'], 'field_name': s['field_name'], 'coordinates': s['coordinates'],'page':s['page']}
  else:
    output = "No such name"
  return jsonify({'result' : output})

@app.route('/form', methods=['POST'])
def add_form():
  form = mongo.db.forms
  print(request.json['data'])
  for index in json.loads(request.json['data']):
    formName = index['form_name']
    fieldName = index['field_name']
    coordinates = index['coordinates']
    page = index['page']
    flag = form.find_one({'form_name': formName, 'field_name': fieldName})
    if flag==None:
      form_id = form.insert({"form_name":formName,
      "field_name": fieldName, 
      "coordinates":coordinates,
      "page": page
      })
    else:
      updatedExists = form.update({'form_name':formName, 'field_name': fieldName},{'$set':{'coordinates':coordinates,'page': page }}, upsert= True)
    new_form = form.find_one({'form_name': formName, "field_name":fieldName})
    output = {'form_name':new_form['form_name'],'field_name':new_form['field_name'],'coordinates':new_form['coordinates'], 'page':new_form['page']}
  return jsonify({'result' : output})
  
  

  #if form_name and field_name already exists
  

if __name__ == '__main__':
    app.run(debug=True)
