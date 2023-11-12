import http from 'node:http';

async function req({
    url = 'localhost',
    port,
    path = '/',
    method = 'GET',
    headers = {},
})
{
    const options = {
        hostname: url,
        port: port,
        path: path,
        method,
        headers,
    };

    return new Promise(( resolve, reject ) => {
        console.log( `Making ${method} request to ${url}:${port}` );

        const req = http.request( options, res => {
            res.setEncoding( 'utf8' );

            let data = '';
            res.on( 'data', chunk => data += chunk );

            res.on( 'end', () => {
                console.log( `[${method}] ${url}:${port}${path} Response: ${data}` );
                resolve( data );
            });
        });

        req.on( 'error', err => {
            reject( `Error in request [${method}] ${url}:${port}${path}` );
        });

        req.end();
    });
}

export { req };

