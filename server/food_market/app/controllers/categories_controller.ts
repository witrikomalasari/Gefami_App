import Category from '#models/category'
import { createPostValidator } from '#validators/validatorcategory'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    try {
      const allDataCategories = await Category.all()

      return response.ok({
        message: `Data berhasil ditampilkan`,
        data: allDataCategories,
      })
    } catch (error) {
      return response.badRequest({
        message: 'Data tidak berhasil ditampilkan',
        error: error.messages,
      })
    }
  }
  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      const validationPayloadPost = await request.validateUsing(createPostValidator)
      const newCategory = await Category.create(validationPayloadPost)
      console.log('adf', newCategory.nama)

      return response.ok({
        message: 'Data kategori berhasil tersimpan',
        data: newCategory,
      })
    } catch (error) {
      return response.badRequest({
        message: 'Data tidak dapat tersimpan',
        error: error.messages,
      })
    }
  }
}
