'use strict'

const Picture = use('App/Models/Picture');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pictures
 */
class PictureController {
  /**
   * Show a list of all pictures.
   * GET pictures
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Picture.all());
  }

  /**
   * Render a form to be used for creating a new picture.
   * GET pictures/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new picture.
   * POST pictures
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    console.log(request.all())
    const picture= new Picture()
    picture.photography =request.input('photography')

    await picture.save()
    return response.redirect('/picture')
  }

  /**
   * Display a single picture.
   * GET pictures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const picture = await Picture.find(params.id);
    return response.json(picture);
  }

  /**
   * Render a form to update an existing picture.
   * GET pictures/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update picture details.
   * PUT or PATCH pictures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const picture= await Picture.find(params.id)
    picture.photography =request.input('photography')
    await picture.save()
    return response.redirect('/picture')
  }

  /**
   * Delete a picture with id.
   * DELETE pictures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const picture = await Picture.find(params.id);
    await picture.delete()
  }
}

module.exports = PictureController
