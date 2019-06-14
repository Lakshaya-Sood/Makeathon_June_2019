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
  form = mongo.db.form1
  name = request.json['name']
  distance = request.json['distance']
  form_id = form.insert({'name': name, 'distance': distance})
  new_form = form.find_one({'_id': form_id })
  output = {'name' : new_form['name'], 'distance' : new_form['distance']}
  return jsonify({'result' : output})

if __name__ == '__main__':
    app.run(debug=True)
