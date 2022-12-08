import pickle
import numpy as np
def jobmodel(da):
    arr = ([value for value in da])
    data = np.array(arr)
    data = data.reshape(1,-1)
    data = [list( map(int,i) ) for i in data] 
    loaded_model = pickle.load(open("careerlast.pkl", 'rb'))
    predictions = loaded_model.predict(data)
    
    pred = loaded_model.predict_proba(data)
    
    
    pred = pred > 0.05
    i = 0
    j = 0
    index = 0
    res = {}
    final_res = {}
    while j < 17:
        if pred[i, j]:
            res[index] = j
            index += 1
        j += 1
    index = 0
    for key, values in res.items():
        if values != predictions[0]:
            final_res[index] = values
            
            index += 1
    jobs_dict = {0:'AI ML Specialist',
                1:'API Integration Specialist',
                2:'Application Support Engineer',
                3:'Business Analyst',
                4:'Customer Service Executive',
                5:'Cyber Security Specialist',
                6:'Data Scientist',
                7:'Database Administrator',
                8:'Graphics Designer',
                9:'Hardware Engineer',
                10:'Helpdesk Engineer',
                11:'Information Security Specialist',
                12:'Networking Engineer',
                13:'Project Manager',
                14:'Software Developer',
                15:'Software Tester',
                16:'Technical Writer'}
                
    #print(jobs_dict[predictions[0]])
    job = {}
    #job[0] = jobs_dict[predictions[0]]
    index = 1  
    data1=predictions[0]
    return {"final_res": final_res,"job_dict": jobs_dict,"job0": data1}