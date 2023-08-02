import mongoose from 'mongoose'

export async function connect() {
    try {
        mongoose.connect('mongodb+srv://doadmin:h8DC0WgL254M61p3@db-mongodb-nyc1-08654-eea55fda.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-nyc1-08654&tls=true');
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('mongoDB connection is created!!! ');
        })
        connection.on('error', (err) => {
            console.log('Check that mongoDB is running because its causing an error!' + err);
            process.exit();
        })
    } catch (error) {
        console.log('error to connect')
    }
}