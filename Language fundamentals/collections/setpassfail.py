students={"kadi","Dongo","Dingo","karuthakayyan"}
failed={"Dingo"}
passed={}
print(type(students))
passed=students.difference(failed)

print("students:",students)
print("Passed  :",passed)
print("failed  :",failed)

''''
for i in students:
    if i not in failed:
        passed.add(i)'''''