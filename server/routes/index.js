
const router = require('express').Router()
const questionRoutes = require('./question')
const answerRoutes = require('./answer')
const userRoutes = require('./user')
const { authentication } = require('../middlewares/auth')
const User = require('../models/user')

var MailConfig = require('../configs/email');
var hbs = require('nodemailer-express-handlebars');
var gmailTransport = MailConfig.GmailTransport;

var CronJob = require('cron').CronJob;
new CronJob('0 0 1 * *', function () {
    const emails = []

    User.find()
        .then(users => {
            users.forEach(user => {
                MailConfig.ViewOption(gmailTransport, hbs);
                let HelperOptions = {
                    from: '"v overflow" <admin@voverflow.zakiarsyad.com>',
                    to: user.email,
                    subject: 'Hi, guys',
                    template: 'test',
                    context: {
                        name: user.name
                    }
                };
                gmailTransport.sendMail(HelperOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                        res.json(error);
                    }
                    console.log("email is send");
                    console.log(info);
                    res.json(info)
                });                
            })
        })
        .catch(err => {
            console.log(err)
        })
}, null, true, 'America/Los_Angeles');

router.get('/', (req, res) => {
    res.status(200).json({
        message: `app is running`
    })
})

router.use('/users', userRoutes)

router.use('/questions', questionRoutes)

// router.use(authentication)
router.use('/answers', answerRoutes)

module.exports = router