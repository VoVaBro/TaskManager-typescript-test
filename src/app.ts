import express from 'express'
const app = express();
import taskRoutes from './routes/routes';
import bodyParser from 'body-parser';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', taskRoutes);

app.listen(5000, () => console.log('Server start on port 5000'));

export default app;