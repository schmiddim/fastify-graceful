const fastify = require('fastify');

const app = fastify();
let counter = 10;

app.get('/', async (request, reply) => {
    reply.send({message: 'Hello World!'});
});

process.on('SIGTERM', () => {
    /** 
      Problem: Pod is still in Replicaset during Sigint handling
      Traffic to the pod shut be immediately cut off after sending the sigterm
    */
    console.log('Received SIGTERM signal. Closing application gracefully...');

    const timer = setInterval(() => {
        console.log(`Countdown: ${counter} seconds...`);
        counter--;

        if (counter === 0) {
            clearInterval(timer);
            process.exit(0);
        }
    }, 1000);
});
process.on('SIGINT', () => {
    console.log('Received SIGINT signal. Closing application gracefully...');


    const timer = setInterval(() => {
        console.log(`Countdown: ${counter} seconds...`);
        counter--;

        if (counter === 0) {
            clearInterval(timer);
            process.exit(0);
        }
    }, 1000);
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Server is running on port 3000');
});
