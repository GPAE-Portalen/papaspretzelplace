const fs = require('fs');
const fm = require('front-matter');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
    const blogFilePath = `./content/blog/2021-08-17_hello-world.md`;

    try {
        var myData = fs.readFile(blogFilePath, 'utf8', function (err, data) {
            if (err) throw err;

            var content = fm(data);
            abba = content.attributes;

            console.log(abba);

            return abba;
        });

        return {
            statusCode: 200,
            body: JSON.stringify(myData),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }
