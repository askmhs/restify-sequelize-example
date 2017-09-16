import restify from 'restify';
import Model from './src/Domain/Model/Model';

const server = restify.createServer({
    name: 'restify-sequelize-example'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

restify.CORS.ALLOW_HEADERS.push('content-type');
restify.CORS.ALLOW_HEADERS.push('accesskey');
restify.CORS.ALLOW_HEADERS.push('secretkey');
server.pre(restify.CORS({'origins': ['*']}));

require('./src/Http/Routers/User')(server);

Model((model) => {
    model.sequelize.sync({
        force: true
    }).then(() => {
        log('Schema synced successfully!');
    }).catch((errResult) => {
        console.log(errResult);
    });
});

export default server;