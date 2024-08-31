import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DB_USERNAME, DB_PASSWORD } = process.env;

const Connection = async () => {
    // Construct the MongoDB connection URL using environment variables
    const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.glf1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Add this option to manage connection more effectively
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to the database:', error);
    }
};

export default Connection;
