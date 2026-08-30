import crypto, { randomBytes } from "crypto"

// crypto is built in nodejs module used to create random uuids, 
// id(for users in db), 
// secure tokens (email nd phone token),
//  hashing data
// encrypt/decrypt


// uuid(universal unique identifier) is used to generate unique id and mostly used in db for USERID coloumn.

const userId = crypto.randomUUID()
// console.log(userId);


// used commonly in password reset api or email verification or session secret, api keys etc.

const resetpass = crypto.randomBytes(16).toString('hex')
// convert the bytes into hex form and one byte will become 2 character in hex form.
// console.log(resetpass);



// crypto.createHash(): it converts the data into fixed length string : 

// hashing is one way cryptograph nd cannot be dehashed.
// mostly used for passwords storing hash passwords in db.

// input -> hash ✅
// hash -> input ❌ (for this to happen we need )

// const text = "hello node"

// const hash = crypto.createHash("sha256").update(text).digest('hex')
// console.log(hash);



// crypto.createHmac (hmac) : creates a hash using a secret key.

// normal hash : data - hash

// hmac hash : data + secret -> signed hash 

const secretKey = "mysecret key"
const msg = "user_id=1"

const sign = crypto.createHmac('sha256', secretKey).update(msg).digest('hex')
// console.log(sign);

// const signVerify = crypto.createHmac('sha256', secretKey).update(msg).digest('hex')
// console.log(`signature is valid and matching `, sign === signVerify)

