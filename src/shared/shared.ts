export const EXTERNAL_URL_RE = /^[a-z]+:/i

export const PATHNAME_PROTOCOL_RE = /^pathname:\/\//

export const APPEARANCE_KEY = 'vitepress-theme-appearance'

export interface Header {
  /**
     * The level of the header
     *
     * `1` to `6` for `<h1>` to `<h6>`
     */
  level: number
  /**
     * The title of the header
     */
  title: string
  /**
     * The slug of the header
     *
     * Typically the `id` attr of the header anchor
     */
  slug: string
  /**
     * Link of the header
     *
     * Typically using `#${slug}` as the anchor hash
     */
  link: string
  /**
     * The children of the header
     */
  children: Header[]
}
