import vine, { SimpleMessagesProvider } from '@vinejs/vine'

/**
 * Validates the post's creation action
 */

export const createPostValidator = vine.compile(
  vine.object({
    nama: vine
      .string()
      .alpha({ allowSpaces: true, allowDashes: true, allowUnderscores: true })
      .trim(),
  })
)

/**
 * Validates the post's update action
 */
export const updatePostValidator = vine.compile(
  vine.object({
    categories: vine
      .array(
        vine.object({
          nama: vine
            .string()
            .alpha({ allowSpaces: true, allowDashes: true, allowUnderscores: true })
            .trim(),
        })
      )
      .distinct('nama'),
  })
)

const messages = {
  'required': 'inputan {{field}} harus diisi tidak boleh kosong',
  'categories.nama.alpha': 'inputan {{field}} harus alphabet',
  'categories.nama.unique': 'inputan {{field}} harus unik/tidak boleh duplikat',
}

const fields = {
  nama: 'nama',
}

vine.messagesProvider = new SimpleMessagesProvider(messages, fields)
