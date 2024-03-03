import dotenv from 'dotenv';

export function loadConfiguration() {
    const URI = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.xuq9yaf.mongodb.net/${env.ATLAS_DB}`;
    return URI;
}
