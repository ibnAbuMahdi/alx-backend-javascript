import express from 'express';
import { AppController } from './controllers/AppController';
import { StudentsController } from './controllers/StudentsController';
import router from './routes/index'
const app = express();
app.use('/', router)
app.use('/students', router)
app.use('/students/:major', router)

app.listen(1245);
export default app;
