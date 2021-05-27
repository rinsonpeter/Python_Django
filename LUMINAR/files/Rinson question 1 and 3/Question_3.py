def split_letters(filename="bodashtart"):
    line = open(filename, "r")
    dictvowel = {}
    dict = {}

    for words in line:
        word = words.rstrip("\n").split(' ')
        for eachword in word:
            for letters in eachword:
                if letters in ['a', 'e', 'i', 'o', 'u']:
                    if eachword not in dictvowel:
                        dictvowel[eachword] = 1
                    else:
                        dictvowel[eachword] += 1

    line1 = open("words_1", "w")
    line2 = open("words_2", "w")
    for k in dictvowel:
        if dictvowel[k] >= 2:
            line1.write(k + '\n')
        else:
            line2.write(k + '\n')

    for m in dictvowel:
        print(m, ": ", dictvowel[m])


split_letters(filename = 'bodashtart')
