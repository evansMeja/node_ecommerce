import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import config from '../config';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});

aws.config.update({
  accessKeyId: 'ASIAR576S5TK2TWJQ2P6',
  secretAccessKey: 'ooSSgcRby6oXx4fliITj+5YVh6aijE9/9BVJwJEy'
});


const s3 = new aws.S3({
 accessKeyId: 'ASIAR576S5TK2TWJQ2P6',
 secretAccessKey: 'ooSSgcRby6oXx4fliITj+5YVh6aijE9/9BVJwJEy',
 sessionToken:'FwoGZXIvYXdzEAUaDOQFWjLWGL4cWixXnSLKAQRKJgZXwuIuVsDtcAbzstnipJwDRaeAvHimcbpbCQo35PgVNCR9Kz3K1BQT1TVFW0NrNu3OK9/OKCegrQjKNdojtvoePl2wYSdR1kMoqyK3EYhTA7YzAnLfFyasg39d9/aSRsYmbmtizk2M4ls2BECVcFVOIjcuu/DgGEyUGUUJTcKfpOIh5pab8GbFV+hJxC+BguDlUNcpwuPcobEZVcEjOIoDYKUnNVDwJ0Q+S2ESeWvMmHl0bNPdhtzvVULZH082+zORhtCP7DooopLT+gUyLSV3YgZt0TQRBc97HBw0ibBRHPdJH5DzTEmVMvNO13o+7sqbmD8VINhVwi9/Wg==',
 Bucket: 'mynews3account'
});


const storageS3 = multerS3({
  s3 : s3,
  bucket: 'mynews3account',
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key(req, file, cb) {
    cb(null, file.originalname);
  },
});


const uploadS3 = multer({ storage: storageS3 });

router.post('/s3', uploadS3.single('image'), (req, res) => {
  res.send(req.file.location);
});
export default router;
