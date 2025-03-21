import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  category: string
  author: string
  date: string
}

export interface Article extends ArticleMeta {
  content: string
}

const contentDirectory = path.join(process.cwd(), "content")

export function getArticleBySlug(category: string, slug: string): Article {
  const filePath = path.join(contentDirectory, "documentation", category, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    author: data.author,
    date: data.date,
    content,
  }
}

export function getAllArticles(): ArticleMeta[] {
  const categories = fs.readdirSync(path.join(contentDirectory, "documentation"))

  const articles: ArticleMeta[] = []

  categories.forEach((category) => {
    const categoryPath = path.join(contentDirectory, "documentation", category)
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath)

      files.forEach((file) => {
        if (file.endsWith(".md")) {
          const filePath = path.join(categoryPath, file)
          const fileContents = fs.readFileSync(filePath, "utf8")
          const { data } = matter(fileContents)
          const slug = file.replace(".md", "")

          articles.push({
            slug,
            title: data.title,
            description: data.description,
            category: data.category,
            author: data.author,
            date: data.date,
          })
        }
      })
    }
  })

  return articles
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  const categoryPath = path.join(contentDirectory, "documentation", category)

  if (!fs.existsSync(categoryPath)) {
    return []
  }

  const files = fs.readdirSync(categoryPath)
  const articles: ArticleMeta[] = []

  files.forEach((file) => {
    if (file.endsWith(".md")) {
      const filePath = path.join(categoryPath, file)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      const slug = file.replace(".md", "")

      articles.push({
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        author: data.author,
        date: data.date,
      })
    }
  })

  return articles
}

export function getAllCategories() {
  const categories = fs.readdirSync(path.join(contentDirectory, "documentation"))

  return categories.filter((category) => {
    const categoryPath = path.join(contentDirectory, "documentation", category)
    return fs.statSync(categoryPath).isDirectory()
  })
}

