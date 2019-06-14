# mongo.py

from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'makeathon'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/makeathon'

mongo = PyMongo(app)

@app.route('/form', methods=['GET'])
def get_all_forms():
  #form1 is collection name
  form = mongo.db.form1
  output = []
  for s in form.find():
    output.append({'name' : s['name'], 'distance' : s['distance']})
  return jsonify({'result' : output})

@app.route('/form/', methods=['GET'])
def get_one_form(name):
  form = mongo.db.form1
  s = form.find_one({'name' : name})
  if s:
    output = {'name' : s['name'], 'distance' : s['distance']}
  else:
    output = "No such name"
  return jsonify({'result' : output})

@app.route('/form', methods=['POST'])
def add_form():
  form = mongo.db.forms
  formId = request.json['id']
  formName = request.json['form_name']
  description = request.json['description']
  barcode = request.json['barcode']
  pdfMetadata = request.json['pdf_metadata']
  fieldName= request.json['field_name']

#   field_name
#   coordinates: {
#             "point_A":{  
#                "x":0,
#                "y":0
#             },
  form_id = form.insert({'id': formId, 'form_name': formName, 'description': description, 'barcode': barcode, 'pdf_metadata': {'element-map_id_1':{'field_name':fieldName}})
  new_form = form.find_one({'_id': form_id })
  output = {'form_id' : new_form['formId'], 'form_name' : new_form['form_name']}
  return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)
