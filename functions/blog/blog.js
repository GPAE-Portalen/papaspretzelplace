const fs = require('fs');
const fm = require('front-matter');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
    const mdFilePath = `./content/blog/${event.queryStringParameters.fileName}.md`;
    const jsonFilePath = `./public/data/blog/${event.queryStringParameters.fileName}.json`;

    console.log(mdFilePath);
    console.log(jsonFilePath);

    try {
        var data = fs.readFileSync(mdFilePath, 'utf8', function (err, data) {
            if (err) throw err;
            return data;
        });

        var content = fm(data);
        var blogPost = content.attributes;

        fs.writeFile(jsonFilePath, JSON.stringify(blogPost), function (err) {
            if (err) throw err;
            console.log(jsonFilePath, 'Saved!');
        });

        return {
            statusCode: 200,
            body: JSON.stringify(blogPost),
        }

    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }
