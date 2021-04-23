const fs = require('fs')

//write html file

function writeSite(html){
    fs.writeFile('./output/team.html', html, err => {
    if (err){
         throw err
    }
    console.log("Page created!")
    })

     
    
}

module.exports = writeSite;