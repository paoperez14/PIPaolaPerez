import { trim } from "ramda"

export const experienceTitleToSlug = (title) =>{
  const titleTrimed = trim(title)
  return titleTrimed.replace(/\s/g, '-')
}