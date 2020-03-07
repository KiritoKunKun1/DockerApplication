import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
	const user = await User.create({
		name: 'Pedro Henrique',
		email: 'pedrolol73@gmail.com.br',
		password_hash: '1238712387'
	});

  return res.json({user});
});

export default routes;
