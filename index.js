import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';

const app = express();

app.use(cors());
// Avoid body-parser deprecated warning by providing `extended` option
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
