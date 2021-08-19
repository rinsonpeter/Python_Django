data_list = [{'id':'data1','last_updated':'18-03-20121','frequency':96},
             {'id':'data2','last_updated':'25-03-20121','frequency':80},
             {'id':'data3','last_updated':'15-03-20121','frequency':98},
             {'id':'data4','last_updated':'12-03-20121','frequency':76},
             {'id':'data5','last_updated':'29-03-20121','frequency':67}]

def deletion_order1(data_list,priority):

    # set priority = frequency
    min=data_list[0]['frequency']
    length=len(data_list)
    for i in range(length):
        for j in range(length-1):
            if data_list[j]["frequency"] > data_list[j+1]["frequency"]:
                min=data_list[j+1]["frequency"]

    print("minimum frequency value found:",min) 

    for k in range(0,length):
        if min==data_list[k]["frequency"]:
            data_list.remove(data_list[k])

    for i in data_list:
        print(i)     

# priority = "frequency"
# deletion_order1(data_list,priority)

    #set priority = last_updated
    # priority == "last_updated"
    # for i in data_list:
    #     data_list[i]["last_updated"].sort(reverse = True)
    # print(data_list)
    # data_list.remove(min(i))
def deletion_order2(data_list,priority):
    min=data_list[0]['last_updated']

    datedata=min.split('-')
    date=data_list[0]
    month=data_list[1]
    year=data_list[2]

    length=len(data_list)
    for i in range(length):
        for j in range(length-1):
            data=data_list[j]['last_updated'].split('-')
            for k in range(len(data)):
                if data[2] > int(year):
                                                   
    print(data)        

priority = "last_updated"
deletion_order2(data_list,priority)

