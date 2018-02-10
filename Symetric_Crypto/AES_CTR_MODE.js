//creating ciphertext

var crypto=require('crypto');
var text="Encryption testing AES";
var key=crypto.randomBytes(32);
var iv=crypto.randomBytes(16);
var algorithm='aes-256-ctr';  //cipher and mode of operarion


//creating ciphertext
var cipher=crypto.createCipher(algorithm,key,iv);

//encrypt message 
var encrypt=cipher.update(text,'utf8','base64');

encrypt+=cipher.final('hex');//add another output type 


//Now our plain-text is encoded
//Message cam be transmitted to receiver
//receiver must know initialization vector (IV) and key to decrypt message 