var express = require('express');
//var mailer = require('express-mailer');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// create application/json parser
//var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', function (req, res) {
  res.render('index', {
      author_name: "Бондаренко Андрей",
      author_email: "printex.orsk@gmail.com",
      
      title: "ОРДЕНСКИЕ И МЕДАЛЬНЫЕ ПЛАНКИ",
      slogan: "Здесь вы можете сделать заказ на изготовление медальных и орденских планок на любые награды. При наличии редких медалей применяется технология изготовления планки без тканевых лент.",
      
      description: "Изготовление медальных и орденских планок на любые награды",
      keywords: "Планки, колодка, медаль, орден, награды, изготовление, заслуга, выслуга, доблесть, отвага, боевые, отличия, награждение, муаровая, лента, армия, МВД, МЧС, фсин, росгвардия, казачество, ФСБ, пограничник, фссп, афганцы",
      copyright: "Сайт разработан в 2018г.",
      
      enter_email_text: "Введите адрес электронной почты, чтобы оставить заявку",
      enter_email_form: "введите адрес электронной почты",
      button_email_form: "ОТПРАВИТЬ",
  });
});

const serversendOption = {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'amulet.seo',
        pass: 'bondarenko2008'
    }
}

app.post('/input_email', function(req,res) {
    var client_email = req.body.form_email;    
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'amulet.seo',
                pass: 'bondarenko2008'
            }
        });
        let mailOptions = {
            from: '"Cайт Planki56.ru" <amulet.seo@yandex.ru>', // sender address
            to: 'printex.orsk@gmail.com', // list of receivers
            subject: 'Planki56RU', // Subject line
            text: "С сайта planki56.ru пришёл контактный email. Клиент хочет чтобы Вы с ним связались по электронной почте "+ client_email +".",
            html: '<b>С сайта planki56.ru пришёл контактный email: <a href="mailto:'+client_email+'">'+client_email+'</a></b>.'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
})

app.post('/input_contact', function(req,res,next) {
    var client_name = req.body.modalform_client;
    var client_email = req.body.modalform_email;
    var client_text = req.body.modalform_text;
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'amulet.seo',
                pass: 'bondarenko2008'
            }
        });
        let mailOptions = {
            from: '"Cайт Planki56.ru" <amulet.seo@yandex.ru>',
            to: 'printex.orsk@gmail.com',
            subject: 'Planki56RU',
            text: 'С сайта planki56.ru пришло сообщение.',
            html: "<b>С сайта planki56.ru пришло сообщение: <p>Имя: <strong>"+client_name+"</stron></p><p>Email: <strong>"+client_email+"</strong><p>Текст: <strong>"+client_text+"</strong>.<br/><br/><br/><p>Письмо было сформировано автоматически, не отвечайте на него.</p>"
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
})

app.use('/images', express.static(__dirname + '/images'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});