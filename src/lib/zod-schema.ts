import type { TypedSchema, TypedSchemaError } from 'vee-validate'
import type { output, ZodType } from 'zod'

/**
 * Adapter đưa schema zod 4 vào vee-validate
 * (@vee-validate/zod chưa hỗ trợ zod 4).
 */
export function toTypedSchema<T extends ZodType>(schema: T): TypedSchema<output<T>, output<T>> {
  return {
    __type: 'VVTypedSchema',
    async parse(values) {
      const result = await schema.safeParseAsync(values)
      if (result.success) return { value: result.data as output<T>, errors: [] }

      const errors = new Map<string, TypedSchemaError>()
      for (const issue of result.error.issues) {
        const path = issue.path.join('.')
        const entry = errors.get(path) ?? { path, errors: [] }
        entry.errors.push(issue.message)
        errors.set(path, entry)
      }
      return { errors: [...errors.values()] }
    },
  }
}

