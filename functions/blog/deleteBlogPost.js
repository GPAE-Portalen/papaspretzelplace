const fs = require('fs');
const fm = require('front-matter');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
    const jsonFilePath = `./public/data/blog/${event.queryStringParameters.fileName}.json`;

    console.log(jsonFilePath);

    try {
        fs.unlink(mdFilePath, function (err, data) {
            if (err) throw err;
            console.log(jsonFilePath, 'Deleted!');
        });

        return {
            statusCode: 200,
            body: 'ok',
        }

    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }