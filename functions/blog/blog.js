const fs = require('fs');
const fm = require('front-matter');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
    const mdFilePath = `./content/blog/${event.queryStringParameters.fileName}.md`;
    const jsonFilePath = `./public/data/blog/${event.queryStringParameters.fileName}.json`;

    console.log(mdFilePath);
    console.log(jsonFilePath);

    try {
        let x = "";

        fs.readFile(mdFilePath, 'utf8', function (err, data) {
            if (err) throw err;

            var content = fm(data);
            var blogPost = content.attributes;

            x = JSON.stringify(blogPost);

            fs.writeFile(jsonFilePath, JSON.stringify(blogPost), function (err) {
                if (err) throw err;
                console.log(jsonFilePath, 'Saved!');
            });
        });

        return {
            statusCode: 200,
            body: x,
        }

    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }
