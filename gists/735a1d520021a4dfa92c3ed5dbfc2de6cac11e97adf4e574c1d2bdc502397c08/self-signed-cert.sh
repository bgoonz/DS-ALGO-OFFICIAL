openssl req -x509 -newkey rsa:2048 -keyout key.password.pem -out cert.pem -days 36500

# remvoe the passphrase from the key file
openssl rsa -in key.password.pem -out key.pem