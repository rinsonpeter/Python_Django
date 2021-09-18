import base64

str1 = "Hello Base64!"
str1bytes = str1.encode('ascii')
b64bytes = base64.b64encode(str1bytes)
b64string = b64bytes.decode('ascii')

print("Base64 Encoded: ",b64string)

str1bytes = b64string.encode('ascii')
b64bytes = base64.b64decode(str1bytes)
b64string = b64bytes.decode('ascii')

print("Base64 Decoded: ",b64string)
