import dotenv from 'dotenv';

dotenv.config();

export function startProductionServer(nameExpress) {
    let config = JSON.parse(process.env.MY_SERVER);

    nameExpress.listen(config.port, config.hostname, () => {
        console.log(`listening on http://${config.hostname}:${config.port}`);
    });
}