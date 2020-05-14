import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRoute from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoute);

export default routes;