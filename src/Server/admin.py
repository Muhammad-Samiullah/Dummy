def alldata(mysql):
    list = []
    cursor = mysql.connection.cursor()
    query = "SELECT name, email, role FROM `users` u, `roles` r WHERE u.role_id=r.role_id;"
    cursor.execute(query)
    result = cursor.fetchall()
    list.append(result)
    return {"list" : list}

def allresult(mysql):
    list = []
    cursor = mysql.connection.cursor()
    query = "SELECT * FROM `results` r, `academics` a WHERE r.academic_id=a.academic_id;"
    cursor.execute(query)
    result = cursor.fetchall()
    list.append(result)
    return {"list" : list}

def getFaq(mysql):
    list = []
    cursor = mysql.connection.cursor()
    query = "SELECT * FROM `faq`"
    cursor.execute(query)
    result = cursor.fetchall()
    list.append(result)
    return {'list': list}

def delete(mysql, email):
    mail = email['email']
    cursor = mysql.connection.cursor()
    query = "DELETE FROM `users` WHERE `email`='"+mail+"';"
    query1 = "DELETE FROM `results` Where `email`= '"+mail+"';"
    try:
        cursor.execute(query)
        cursor.execute(query1)
        mysql.connection.commit()
        return 'Success'
    except:
        return 'Failed'

def deleteFaq(mysql, id):
    id = str(id['id'])
    cursor = mysql.connection.cursor()
    query = "DELETE FROM `faq` WHERE `id`='"+id+"';"
    try:
        cursor.execute(query)
        mysql.connection.commit()
        return 'Success'
    except:
        return 'Failed'
    
def changerole(mysql, data):
    r = data['role']
    mail = data['email']
    cursor = mysql.connection.cursor()
    query = "UPDATE `users` SET `role_id`='"+r+"' WHERE `email`='"+mail+"';"
    try:
        cursor.execute(query)
        mysql.connection.commit()
        return 'Success'
    except:
        return 'Failed'
    