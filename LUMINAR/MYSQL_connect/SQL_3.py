import mysql.connector
db=mysql.connector.connect(
    host="localhost",
    user="root",
    password="Password@123",
    auth_plugin="mysql_native_password",
    database="luminarpython"
)                                          #open database conection
cursor=db.cursor()
#cursor.execute("""DROP TABLE IF EXISTS employee""")
#sql="create table Employee(FIRST_NAME CHAR(20),LAST_NAME CHAR(20),AGE INT,SEX CHAR(1),INCOME INT)"
#sql="Insert into Employee(FIRST_NAME,LAST_NAME,AGE,SEX,INCOME)VALUES('vijay','karnan',21,'M',7000)"
try:
    sql="SELECT * from Employee"
    cursor.execute(sql)
#    db.commit()
    myresult=cursor.fetchall()
    for x in myresult:
        print(x)
except Exception as e:
    db.rollback()
    print(e.args)
finally:
    db.close()


