const emailer = require('nodemailer')

const EMAIL='mkharvi570@gmail.com'
const PASSWORD='manuGMAIL4322@'

let transporter = emailer.createTransport({
    service:'gmail',
    auth:{
        user:EMAIL,
        pass:PASSWORD
    }
})

export default transporter