import {Client} from 'pg';
import { POSTGRES_URL } from './server.config';

const pgClient = new Client(POSTGRES_URL);

export default pgClient;