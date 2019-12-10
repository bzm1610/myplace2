'use strict'

const About = use('App/Models/About');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with abouts
 */
class AboutController {
  /**
   * Show a list of all abouts.
   * GET abouts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await About.all());
  }

  /**
   * Render a form to be used for creating a new about.
   * GET abouts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new about.
   * POST abouts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    console.log(request.all())
    const about= new About()
    about.title =request.input('title')
    about.description =request.input('description')

    await about.save()
    return response.redirect('/about')
  }

  /**
   * Display a single about.
   * GET abouts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const about = await About.find(params.id);
    return response.json(about);
  }

  /**
   * Render a form to update an existing about.
   * GET abouts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update about details.
   * PUT or PATCH abouts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const about= await About.find(params.id)
    about.title =request.input('title')
    about.description =request.input('description')
    await about.save()
    return response.redirect('/about')
  }

  /**
   * Delete a about with id.
   * DELETE abouts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const about = await About.find(params.id);
    await about.delete()
  }
}

module.exports = AboutController
