import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://mydb:mydb@cluster0.y5hl2.mongodb.net/mydb?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: 'ASIAR576S5TKTNELF3ZE',
  secretAccessKey: 'uaT+ER1oG/HcquUP7bpW3duGXqy4OACW6wvQ8MJi',
  bucket: 'mynews3account'
};
