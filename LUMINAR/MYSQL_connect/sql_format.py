import mysql.connector
db=mysql.connector.connect(
    host="localhost",
    user="root",
    password="Password@123",
    auth_plugin="mysql_native_password"
)                                          #open database conection
crsr=db.cursor()
sql="SELECT VERSION()"
crsr.execute(sql)

data=crsr.fetchone()
print("database version: ",data)

db.close()