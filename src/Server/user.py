import passwordhash
def getData(mysql, data):
    cursor = mysql.connection.cursor()
    email = data['email']
    password = data['password']
    password = passwordhash.hash(password).decode('utf-8', "ignore")
    query = "SELECT * FROM `users` u, roles r WHERE u.role_id=r.role_id AND `email`='"+email+"' AND `password`='"+password+"';"
    cursor.execute(query)
    result = cursor.fetchall()
    if len(result) == 0:
        return {'result': 'none'}
    else:
        return result[0]

def editbyadmin(mysql, data):
    cursor = mysql.connection.cursor()
    name = data["name"]
    prev_email = data["prevemail"]
    if name != "":
        try:
            query = "UPDATE `users` SET `name`='"+name+"' WHERE `email` ='"+prev_email+"'"
            cursor.execute(query)
            mysql.connection.commit()
            return {'Result': "success"}
        except:
            return {'Result': "Failed"}

    else:
        return {"Result" : "Failed"}
   

def editUser(mysql, data):
    cursor = mysql.connection.cursor()
    email = data['email']
    query = "SELECT * FROM `users` WHERE `email`='"+email+"'"
    cursor.execute(query)
    result = cursor.fetchall()
    if len(result) == 0:
        return {'result': 'none'}
    else:
        return result[0]

def setData(mysql, data):
    cursor = mysql.connection.cursor()
    name = data['name']
    email = data['email']
    password = data['password']
    password = passwordhash.hash(password).decode('utf-8',"ignore")
    query = "INSERT INTO `users` (`name`, `email`, `password`, `role_id`) VALUES ('"+name+"', '"+email+"', '"+password+"', '2');"
    try:
        cursor.execute(query)
        mysql.connection.commit()
        return 'Success'
    except:
        return 'Failed'
def updateProfile(mysql, dat):
    name = dat["name"]
    password = dat["password"]
    prev_email = dat["previousemail"]
    cursor = mysql.connection.cursor()
    if password == "":
        try:
            query = "UPDATE `users` SET `name`='"+name+"' WHERE `email` ='"+prev_email+"'"
            print(query)
            cursor.execute(query)
            mysql.connection.commit()
            return 'Success'
        except:
            return 'Failed'
    elif password != "":
        try:
            password = passwordhash.hash(password).decode('utf-8',"ignore")
            query = "UPDATE `users` SET `name`='"+name+"', `password`= '"+password+"' WHERE `email` ='"+prev_email+"'"
            cursor.execute(query)
            mysql.connection.commit()
            return 'Success'
        except:
            return 'Failed'
    else:
        return "Failed"

def getStudentCounseling(options, finance, finances, family_bg, priorities, maxCount):
    results = []
    isSame = True
    minCount = 1
    totalCount = 0
    saveOptions = options
    limit = 4

    
    for index, option in enumerate(options):        
        if option[1] != maxCount:
            isSame = False
    
    for index, option in enumerate(options):
        if option[1] == maxCount:
            totalCount += 1

    print("maxCount: ", maxCount)
    for index, option in enumerate(options):
        print('Option: ', option)
        print('Option[1]', option[1])
        print(maxCount)
        # print('Finances', finances)
        # print('Finance', finance)
        if option[1] == maxCount and (int(finance) >= int(finances[index]) or family_bg == '1'):
            print("Inside")
            if maxCount == '1' or maxCount == '2' and isSame:
                if priorities[index] == max(priorities):
                    career = ' '.join(option[0].split('_'))
                    career = career.replace('Option ', '')
                    if '&' in career:
                        career = career.split('&')
                        for c in career:
                            if c not in results:
                                results.append(c)
                    else:
                        if career not in results and len(results) < limit:
                            results.append(career)
            elif maxCount == '5' and isSame:
                if priorities[index] == min(priorities):
                    career = ' '.join(option[0].split('_'))
                    career = career.replace('Option ', '')
                    if '&' in career:
                        career = career.split('&')
                        for c in career:
                            if c not in results:
                                results.append(c)
                    else:
                        if career not in results and len(results) < limit:
                            results.append(career)
            elif isSame:
                if priorities[index] == min(priorities):
                    career = ' '.join(option[0].split('_'))
                    career = career.replace('Option ', '')
                    if '&' in career:
                        career = career.split('&')
                        for c in career:
                            if c not in results:
                                results.append(c)
                    else:
                        if career not in results and len(results) < limit:
                            results.append(career)
            else:
                career = ' '.join(option[0].split('_'))
                career = career.replace('Option ', '')
                print(career)
                if '&' in career:
                    career = career.split('&')
                    if totalCount > 1 and len(career) > 2:
                        career = career[:2]
                    for c in career:
                        if c not in results and len(results) < limit:
                            results.append(c)
                else:
                    if career not in results and len(results) < limit:
                        results.append(career)
    if len(results) > 0 or int(maxCount) == int(minCount):
    # if int(maxCount) == int(minCount):
        return results
    elif int(maxCount) > int(minCount):
        return getStudentCounseling(saveOptions, finance, finances, family_bg, priorities, int(maxCount)-1)


def storeUserData(mysql, data):
    cursor = mysql.connection.cursor()
    print(data)
    arr = data['obj']
    email = data['email']
    priorities = data['priorities'] 
    academic_id = data['academic_id']
    finances = data['finances']
    finance = data['finance']
    family_bg = ''
    migration = ''
    location = ''
    options = []
    for obj in arr:
        if obj[0] == 'family_bg':
            family_bg = obj[1]
        elif obj[0] == 'migration':
            migration = obj[1]
        elif obj[0] == 'location':
            location = obj[1]
        elif 'Option_' in obj[0]:
            options.append(obj)
    maxCount = -1
    priority = -1

    for option in options:
        if int(option[1]) > int(maxCount):
            maxCount = option[1]
    
    results = getStudentCounseling(options, finance, finances, family_bg, priorities, maxCount)

    if len(results) > 0:
        guided_to = ','.join(results)
        query = "INSERT INTO `results` (`email`, `finance`, `academic_id`, `location`, `familybg`, `migration`, `guided_to`) VALUES ('"+email+"', '"+finance+"', '"+academic_id+"', '"+location+"', '"+family_bg+"', '"+migration+"', '"+guided_to+"');"
        try:
            cursor.execute(query)
            mysql.connection.commit()
            return {'Result': results};
        except:
            return {'Result': []}
    else:
        return {'Result': []}
