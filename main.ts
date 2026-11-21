// gta6-meme-x-01 entrypoint (Node 22, standard library only): it reads POST.json
// from the repository root, checks it names a real X post address, and copies it
// to /output/POST.json, where the gate reads it. The entry is the post itself:
// the meme was made in this session, posted on X from a public account with
// make.fun and/or a tag of @makefunai and the play code in its text, and
// POST.json names the post. Nothing this program writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot'
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output'

const POST_PATTERN = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+$/

function readPostAddress(): string {
  const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8')
  const parsed: unknown = JSON.parse(raw)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('POST.json must be a JSON object')
  }
  const url = (parsed as { url?: unknown }).url
  if (typeof url !== 'string' || !POST_PATTERN.test(url)) {
    throw new Error('POST.json must name an X post address like https://x.com/<handle>/status/<id>')
  }
  return url
}

const address = readPostAddress()
mkdirSync(OUTPUT_DIR, { recursive: true })
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'))
console.log(`POST.json copied for ${address}`)
