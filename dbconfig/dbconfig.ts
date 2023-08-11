import mongoose from 'mongoose'

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://doadmin:346eoR1k27Ttu58d@db-mongodb-nyc1-08654-eea55fda.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-nyc1-08654');

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