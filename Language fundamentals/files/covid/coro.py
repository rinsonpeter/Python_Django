f = open("corona","r")
print("type of f:",type(f))
dict = {}
dict2 = {}
maxconfirmedcases = 0
maxdeathcases = 0
totalconfirmed = 0
totaldeath = 0
for lines in f:
    data = lines.rstrip("\n").split(",")
    state = data[3]
    totalcases = data[8]
    deathcases = data[7]
    if (state not in dict):
        dict[state] = totalcases
        dict2[state] = deathcases
    else:
        dict[state] = totalcases
        dict2[state] = deathcases
print("---------------STATE:CONFIRMED CASES--------------")
for k, v in dict.items():
    print(k, ":", v)
    totalconfirmed += int(v)
    if int(v) > maxconfirmedcases:
        maxconfirmedcases = int(v)
        maxconfirmedstate = k
print("---------------STATE:DEATH CASES-----------------")
for k, v in dict2.items():
    print(k, ":", v)
    totaldeath += int(v)
    if int(v) > maxdeathcases:
        maxdeathcases = int(v)
        maxdeathstate = k
print("---------------------------------------------------------------")
print("Total death in India              :", totaldeath)
print("Total confirmed cases in india    :", totalconfirmed)
print("State with highest confirmed cases:", maxconfirmedstate, "(", maxconfirmedcases, ")")
print("State with highest death cases    :", maxdeathstate, "(", maxdeathcases, ")")
