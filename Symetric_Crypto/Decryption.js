var decipher=crypto.createDecpiher(algorithm,key,iv);
var decrypted=decipher.update(encrypt,'hex','utf8');
decrypted+=decipher.final('base64');