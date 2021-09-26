const request = require('request')
const cheerio = require('cheerio')

request("https://www.zoheb.ca/", (err, res, body) => {
  if(!err && res.statusCode == 200){
    const $ = cheerio.load(body)
    //Scrape text from a site
    const titleText = $('.Home_homeLeft__1ArCL h1').text()
    console.log(titleText)
    //Scrape text from a site (iteration through classes with the same name )
    console.log('--------------Getting Section Title Text--------------------')
    $('.title').each((i, elem) => {
      const item = $(elem).text()
      console.log(item)
    }) 
    console.log('--------------Getting Nav Links--------------------')
    //Scrape links from a site
    $('.Navbar_navContainer__1MXmO ul li').each((i, elem) => {
      const link = $(elem).attr('href')
      console.log(link)
    })
  }
})