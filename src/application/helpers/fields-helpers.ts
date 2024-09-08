type Filter = Record<string, any>

export const createObjectByFields = <T>(
  obj: any,
  isDefault: boolean,
  filter: Filter
): T => {
  const result: any = {}
  for (const key in filter) {
    if (key in obj) {
      result[key] = convertToTypes(obj[key], typeof filter[key])
    } else if (isDefault) {
      result[key] = convertToTypes(filter[key], typeof filter[key])
    }
  }
  return result as T
}

const convertToTypes = (value: any, type: string): any => {
  if (type === 'number') {
    return +value
  }
  return value
}
