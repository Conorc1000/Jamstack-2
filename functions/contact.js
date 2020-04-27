exports.handler = (event, _context, callback) => {
    console.log({event});

    callback(null, {
        statusCode: 500,
        body: JSON.stringify({boop: true})
    })
}