from flask import Flask
import mysql.connector
from flask_cors import CORS

db = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='root1234'
)
cursor = db.cursor()
cursor.execute('USE my_zoo;')
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get():
    cursor.execute('SELECT * FROM animal;')
    return {'animal': cursor.fetchall()}


@app.route('/<string:sort_by>', methods=['GET'])
def get(sort_by: str, sort_order: str):
    cursor.execute('SELECT * FROM animal;')
    animal = cursor.fetchall()
    if(sort_by=='0'):
        return {'animal': animal}
    elif(sort_by == '1'):
        animal.sort(key=lambda element: element[4], reverse=sort_order == 'descending')
        return {'animal': animal}

    elif(sort_by == '3'):
        animal.sort(key=lambda element: element[2], reverse=sort_order == 'descending')
        return {'animal': animal}
    elif(sort_by == '4'):
        animal.sort(key=lambda element: element[2], reverse=sort_order == 'descending')
        return {'animal': animal}
    


if __name__ == '__main__':
    app.run(debug=True)