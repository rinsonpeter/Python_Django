f = open("movieslist","r")
dict1 = {}
dict2 = {}
maxnbrmov, maxyrmov=0,0
for lines in f:
    data = lines.rstrip("\n").split(",")
    movie= data[1]
    year=data[2]
    rating=data[3]
    if year not in dict1:
        dict1[year]=1        #{1992:1}
    else:
        dict1[year] +=1       #{1992:2}
    if rating not in dict2:
        dict2[rating]=1       #{3.5:1}
    else:
        dict2[rating]+= 1     #{3.5:2}
for k, v in dict1.items():     #{1992:5,1993:8}     for i in dict:
    print("Year:",k,"-",v,"movies")                 # print(i,dict[i])
    if maxnbrmov<v:                #0<5511
        maxnbrmov=v
        maxyrmov=k
print("--------------------------------------------------------------------")
for k, v in dict2.items():     #{3.5:55}
    print(k,"rating:",v,"movies")
print("--------------------------------------------------------------------")
print("year","'",maxyrmov,"'","maximum of",maxnbrmov,"were released")







