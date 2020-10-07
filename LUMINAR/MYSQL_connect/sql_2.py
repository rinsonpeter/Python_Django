import mysql.connector
db=mysql.connector.connect(
    host="localhost",
    user="root",
    password="Password@123",
    auth_plugin="mysql_native_password",
    database="luminarpython"
)                                          #open database conection
cursor=db.cursor()
cursor.execute("""DROP TABLE IF EXISTS employee""")

sql="create table Employee(FIRST_NAME CHAR(20),LAST_NAME CHAR(20),AGE INT,SEX CHAR(1),INCOME INT)"
cursor.execute(sql)

db.close()