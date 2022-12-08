import faq
import user
import admin
import jobmodel
import Personality
from flask import Flask, jsonify, request, json
from flask_mysqldb import MySQL
from flask_cors import CORS


app = Flask(__name__)
mysql = MySQL(app)
CORS(app)

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "careercoach"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

@app.route("/")
def route():
    return jsonify("server is running")

@app.route("/faq", methods=["POST"])
def fa():
    list = []
    conn = faq.getData(mysql)
    for c in conn:
        list.append(c)
    return {"data": list}

@app.route("/signup", methods=["POST"])
def signup():
    da = request.get_data("data")
    dat = json.loads(da)
    conn = user.setData(mysql, dat)
    return conn

@app.route("/addfaq", methods=["POST"])
def addFaq():
    da = request.get_data("data")
    dat = json.loads(da)
    conn = faq.setData(mysql, dat)
    return conn

@app.route("/editfaq", methods=["POST"])
def editFaq():
    da = request.get_data("data")
    dat = json.loads(da)
    conn = faq.editData(mysql, dat)
    return conn

@app.route("/editbyadmin", methods=["POST"])
def editByAdmin():
    da = request.get_data("data")
    dat = json.loads(da)
    conn = user.editbyadmin(mysql, dat)
    return conn
@app.route("/editProfile", methods=["POST"])
def editProfile():
    da = request.get_data("data")
    dat = json.loads(da)
    res = user.updateProfile(mysql, dat)
    return res
@app.route("/edituser", methods=["POST"])
def editUser():
    da = request.get_data("data")
    dat = json.loads(da)
    conn = user.editUser(mysql, dat)
    print(conn)
    return conn

@app.route("/login", methods=["POST"])
def login():
    da = request.get_data("data")
    dat = json.loads(da)
    conn = user.getData(mysql, dat)
    return conn

@app.route("/user_data", methods=["POST"])
def userData():
    da = request.get_data("obj")
    dat = json.loads(da)
    conn = user.storeUserData(mysql, dat)
    return conn

@app.route("/deleteuser", methods=["POST"])
def deleteUser():
    email = request.get_data("email")
    obj = json.loads(email)
    conn = admin.delete(mysql, obj)
    return conn

@app.route("/deletefaq", methods=["POST"])
def deleteFaq():
    id = request.get_data("id")
    obj = json.loads(id)
    conn = admin.deleteFaq(mysql, obj)
    return conn

@app.route("/changerole", methods=["POST"])
def changeRole():
    data = request.get_data("data")
    obj = json.loads(data)
    conn = admin.changerole(mysql, obj)
    return conn

@app.route("/admindashboard", methods=["POST"])
def adminboss():
    conn = admin.alldata(mysql)
    return conn
#for personality test
@app.route("/personality", methods=["POST"])
def personality():
    data = request.get_data("data")
    obj = json.loads(data)
    x = Personality.personality(obj)
    return {"Personality": x}
@app.route("/resultdashboard", methods=["POST"])
def adminresult():
    conn = admin.allresult(mysql)
    return conn

@app.route("/faqdashboard", methods=["POST"])
def adminfaq():
    conn = admin.getFaq(mysql)
    return conn

@app.route('/predict',methods = ['POST'])
def result():
   if request.method == 'POST':
      result = request.get_data("dat")
      da = json.loads(result)
      d = da['obj']
      data = jobmodel.jobmodel(d)
      return data
@app.route('/jobsave', methods = ['POST'])
def jobsave():
    result = request.get_data("obj")
    da = json.loads(result)
    dat = da["obj"]
    guided_to = ','.join(dat)
    finance = da["finance"]
    academic_id = da["academic_id"]
    familybg = da["familybg"]
    migration = da["migration"]
    location = da["location"]
    email = da["email"]
    cursor = mysql.connection.cursor()
    query = "INSERT INTO `results` (`email`, `finance`, `academic_id`, `location`, `familybg`, `migration`, `guided_to`) VALUES ('"+email+"', '"+finance+"', '"+academic_id+"', '"+location+"', '"+familybg+"', '"+migration+"', '"+guided_to+"');"
    try:
        cursor.execute(query)
        mysql.connection.commit()
        return 'Success'
    except:
        return 'Failed'

@app.route('/previous-scores', methods = ['POST'])
def prev():
    result = request.get_data("obj")
    da = json.loads(result)
    email = da["obj"]
    cursor = mysql.connection.cursor()
    query = f"SELECT id, guided_to, timestamp from `results` WHERE email ='{email}' ORDER BY timestamp DESC"
    cursor.execute(query)
    res = cursor.fetchall()
    return {'res': res}
        
if __name__ == "__main__":
    app.run(debug=True)