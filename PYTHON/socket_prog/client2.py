import socket

client = socket.socket()

client.connect(("localhost", 9001))

print("Client connected")
print("Sending data")
# socket.send(bytearray) # bytearray type
# strings send we have convert to bytearray
# encode,decode
# encode ->encoding type encode convert to byte array
# encodings -> ascii,utf-8,utf-16
# internationalization i18n
# any language -> local -> lang_country -> en_us -> english language us country
# en_in -> english language country india -> local
# utf -> universal text format 8,16 8 1 byte, 16 2 bytes
# strings -> for each character 2 bytes
# strings can support multiple languages
# ascii 1 bytes 0-255 characters
# str -> encode, byterray -> decode
# encode()/decode() parameter encoding
client.send("Hello Server!".encode("ascii"))
print("Data send!")

client.close()
