import dotenv from 'dotenv';



export function startProductionServer(nameExpress) {
    let config = {
        hostname: process.env.VITE_HOSTNAME || 'localhost',
        port: process.env.VITE_PORT_BACKEND || 3000
    };

    nameExpress.listen(config.port, config.hostname, () => {
        console.log(`listening on http://${config.hostname}:${config.port}`);
    });
}