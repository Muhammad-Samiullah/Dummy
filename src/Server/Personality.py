def personality(obj):
    result = []
    answers = []
    I_E = [] #1 for introvert
    S_I = [] #1 for Intuitive
    T_F = [] #1 for Thinking
    J_P = [] #1 for Judgeing

    data = obj["obj"]
    for i in data:
       answers.append(i[1])
    #slicing
    I_E.append(answers[0:5])
    S_I.append(answers[5:10])
    T_F.append(answers[10:15])
    J_P.append(answers[15:20])
    #intover or extrovert
    for j in I_E:
        Introvert = j.count("1")
        Extrovert = j.count("2")
        if Introvert > Extrovert:
            result.append("Introvert")
        else:
            result.append("Extrovert")
    #sensible or intutive
    for k in S_I:
        Intuitive = k.count("1")
        Sensible = k.count("2")
        if Intuitive > Sensible:
            result.append("Intuitive")
        else:
            result.append("Sensible")

    #Thinking or feeling
    for l in T_F:
        Thinking = l.count("1")
        Feeling = l.count("2")
        if Thinking > Feeling:
            result.append("Thinking")
        else:
            result.append("Feeling")

    #judging and perceiving
    for m in J_P:
        Judging = m.count("1")
        Perceiving = m.count("2")
        if Judging > Perceiving:
            result.append("Judging")
        else:
            result.append("Perceiving")
    
    return result
    

