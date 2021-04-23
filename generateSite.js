const fs = require('fs')

//write html file
function writeSite(html){
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFile(outputPath, htmlPage, "utf-8", (err) => {
        if (err) throw err;
        console.log("Team profile page generated!");
    });
}

module.exports = writeSite;