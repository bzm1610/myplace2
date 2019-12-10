'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.get('about','AboutController.index');
Route.get('about/:id','AboutController.show');
Route.post('about','AboutController.store');
Route.post('about/:id','AboutController.update');
Route.delete('about/:id','AboutController.destroy');

Route.get('navbar','NavbarController.index');
Route.get('navbar/:id','NavbarController.show');
Route.post('navbar','NavbarController.store');
Route.post('navbar/:id','NavbarController.update');
Route.delete('navbar/:id','NavbarController.destroy');

Route.get('contact','ContactController.index');
Route.get('contact/:id','ContactController.show');
Route.post('contact','ContactController.store');
Route.post('contact/:id','ContactController.update');
Route.delete('contact/:id','ContactController.destroy');
  
Route.get('project','ProjectController.index');
Route.get('project/:id','ProjectController.show');
Route.post('project','ProjectController.store');
Route.post('project/:id','ProjectController.update');
Route.delete('project/:id','ProjectController.destroy');

Route.get('picture','PictureController.index');
Route.get('picture/:id','PictureController.show');
Route.post('picture','PictureController.store');
Route.post('picture/:id','PictureController.update');
Route.delete('picture/:id','PictureController.destroy');