

const express = require('express')
const request = require('request')

const router = express.Router()

router.get('/', (req, res) => {

    // const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-10-07&sortBy=publishedAt&apiKey=3cd636ab8c364bc48cc5d258a461b998'

    const url = `https://newsdata.io/api/1/news?apikey=pub_13243050292cfdf6cfca26f59ecef5ef2baaa&language=en`

    request({ url, json: true }, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        // console.log(body.status)
        // console.log(body.message)
        console.log(body)
        res.render('index', {
            body: body
        });
        // res.send(body.link)
    })

})




// GET signup
router.get('/getnews', function (req, res) {
    const body = {
        message: 'active',
        results: {content: 'abcdef'}
    }
    res.render('getnews', { body: body });
});







// POST signup 
router.post('/getnews', function (req, res) {



    const input = req.body.newsinfo;

    console.log(input);

    // const url = `https://newsapi.org/v2/everything?q=${input}&from=2022-10-07&sortBy=publishedAt&apiKey=3cd636ab8c364bc48cc5d258a461b998`

    // const url = `https://newsapi.org/v2/everything?q=${input}&from=2022-10-07&sortBy=publishedAt&apiKey=3cd636ab8c364bc48cc5d258a461b998`

    // const url = `https://newsdata.io/api/1/news?apikey=pub_13243050292cfdf6cfca26f59ecef5ef2baaa&language=en`

    // const url = `https://newsdata.io/api/1/news?apikey=pub_13243050292cfdf6cfca26f59ecef5ef2baaa&q=${input}&language=en `

    // // const api_key = 'pub_13243050292cfdf6cfca26f59ecef5ef2baaa'

    // request({ url, json: true,  }, (error, response, body) => {
    //     if (error) {
    //         return console.log(error);
    //     }

    //     console.log(body)
    //     res.render('getnews', {body: body});
    // })

    const url = `https://newsdata.io/api/1/news?apikey=pub_13243050292cfdf6cfca26f59ecef5ef2baaa&language=en`

    request({ url, json: true }, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        // console.log(body.status)
        // console.log(body.message)
        // console.log(body)

        var data = body.results[0].content;
        console.log(data);

        res.render('getnews', {
            body: body
        });



    });
})





module.exports = router;
