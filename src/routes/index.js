const express = require('express');
const router = express.Router();

const Asignatura = require('../lib/AsignaturaSchema');

const Plan = require('../lib/PlanSchema');

const Profesor = require('../lib/ProfesorSchema');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('index');
	});

	app.get('/asignaturas', async (req, res) => {
		const asignaturas = await Asignatura.find();
		res.render('asignaturas', { asignaturas });
	})

	app.get('/planes', async (req, res) => {
		const planes = await Plan.find();
		res.render('planes', { planes });
	})

	app.get('/profesores', async (req, res) => {
		const profesores = await Profesor.find();
		res.render('profesores', { profesores });
	})

	//modulos externos
	/*var asignatura = require('../lib/Asignatura');

	app.get('/asignaturas', (req, res) => {
		asignatura.getAsignaturas(req, res);
	});

	app.get('/asignaturas/:id', (req, res) => {
		asignatura.getAsignatura(req, res);
	});

	app.post('/asignaturas', (req, res) => {
		asignatura.newAsignatura(req, res);
	});

	app.put('/asignaturas/:id', (req, res) => {
		asignatura.updateAsignatura(req, res);
	});

	app.delete('/asignaturas/:id', (req, res) => {
		asignatura.deleteAsignatura(req, res);
	});

	var plan = require('../lib/Plan');

	app.get('/planes', (req, res) => {
		plan.getPlanes(req, res);
	});

	app.get('/planes/:id', (req, res) => {
		plan.getPlan(req, res);
	});

	app.post('/planes', (req, res) => {
		plan.newPlan(req, res);
	});

	app.put('/planes/:id', (req, res) => {
		plan.updatePlan(req, res);
	});

	app.delete('/planes/:id', (req, res) => {
		plan.deletePlan(req, res);
	});

	var profesor = require('../lib/Profesor');

	app.get('/profesores', (req, res) => {
		profesor.getProfesores(req, res);
	});

	app.get('/profesores/:id', (req, res) => {
		profesor.getProfesor(req, res);
	});

	app.post('/profesores', (req, res) => {
		profesor.newProfesor(req, res);
	});

	app.put('/profesores/:id', (req, res) => {
		profesor.updateProfesor(req, res);
	});

	app.delete('/profesores/:id', (req, res) => {
		profesor.deleteProfesor(req, res);
	});*/

	app.use(router);
};
