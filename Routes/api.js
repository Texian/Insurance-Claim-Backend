const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers');
const verifyToken = require('../middleware/verification');

//--------------------- Users
router.get('/users', verifyToken, ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.post('/users', ctrl.users.create);
router.put('/users/:id', ctrl.users.update);
router.delete('/users/:id', ctrl.users.destroy);

//--------------------- Claims
router.get('/claims', verifyToken, ctrl.claims.index);
router.get('/claims/:id', ctrl.claims.show);
router.post('/claims', ctrl.claims.create);
router.put('/claims/:id', ctrl.claims.update);
router.delete('/claims/:id', ctrl.claims.destroy);

//--------------------- Floorplans
router.get('/floorplans', verifyToken, ctrl.floorplans.index);
router.get('/floorplans/:id', ctrl.floorplans.show);
router.post('/floorplans', ctrl.floorplans.create);
router.put('/floorplans/:id', ctrl.floorplans.update);
router.delete('/floorplans/:id', ctrl.floorplans.destroy);

//--------------------- Rooms
router.get('/rooms', verifyToken, ctrl.rooms.index);
router.get('/rooms/:id', ctrl.rooms.show);
router.post('/rooms', ctrl.rooms.create);
router.put('/rooms/:id', ctrl.rooms.update);
router.delete('/rooms/:id', ctrl.rooms.destroy);

//--------------------- Items
router.get('/items', verifyToken, ctrl.items.index);
router.get('/items/:id', ctrl.items.show);
router.post('/items', ctrl.items.create);
router.put('/items/:id', ctrl.items.update);
router.delete('/items/:id', ctrl.items.destroy);

module.exports = router;