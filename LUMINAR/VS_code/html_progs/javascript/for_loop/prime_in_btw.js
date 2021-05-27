var lower = Number(prompt("enter the lower limit: "))
var upper = Number(prompt("enter the upper limit: "))


for (i = lower; i <=upper; i++) {
    flag = 0;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1
            break
        }
    }
    if (flag == 0) {
        console.log(i)
    }
}
