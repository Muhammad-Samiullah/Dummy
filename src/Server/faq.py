def getData(mysql):
    cursor = mysql.connection.cursor()
    query = "SELECT * FROM `faq`"
    cursor.execute(query)
    result = cursor.fetchall()
    return result



def setData(mysql, data):
    cursor = mysql.connection.cursor()
    question = data['question']
    answer = data['answer']
    query = "INSERT INTO `faq` (`question`, `answer`) VALUES ('"+question+"', '"+answer+"');"
    try:
        cursor.execute(query)
        mysql.connection.commit()
        return 'Success'
    except:
        return 'Failed'

def editData(mysql, data):
    cursor = mysql.connection.cursor()
    id = str(data['id'])
    question = data['question']
    answer = data['answer']
    query = "UPDATE `faq` SET `question`='"+question+"', `answer`='"+answer+"' WHERE `id`='"+id+"';"
    try:
        cursor.execute(query)
        mysql.connection.commit()
        return 'Success'
    except:
        return 'Failed'