/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import Route from '@adonisjs/core/services/router'

Route.group(() => {
  // Route.resource('users', 'UsersController').apiOnly()

  Route.resource('categories', 'CategoriesController').apiOnly()
}).prefix('/api/gefami')
