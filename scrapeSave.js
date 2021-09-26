const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('projects.csv');
writeStream.write("Title,Description,Link \n");

request("https://www.zoheb.ca/", (err, res, body) => {
  if(!err && res.statusCode == 200){
    const $ = cheerio.load(body);
    $('#projects .section-container a').each((i, elem) => {
      const titles = $(elem).children('section').children('img').attr('alt');
      const descriptions = $(elem).children('section').text().replace(/,/, "");
      const links = $(elem).attr('href');

      writeStream.write(`${titles},${descriptions},${links} \n`);
    })
    console.log("Write Complete");
  }
})