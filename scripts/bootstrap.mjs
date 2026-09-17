import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const root = process.cwd()
const templateDir = join(root, '.template')
const overridesDir = join(root, 'overrides')
const archivePath = join(tmpdir(), 'locker-folio-main.tar.gz')

if (existsSync(templateDir)) rmSync(templateDir, { recursive: true, force: true })
mkdirSync(templateDir, { recursive: true })

const archiveUrl = 'https://codeload.github.com/qzz0518/locker-folio/tar.gz/refs/heads/main'
console.log('Downloading portfolio template...')
const response = await fetch(archiveUrl)
if (!response.ok) throw new Error(`Template download failed: ${response.status} ${response.statusText}`)
writeFileSync(archivePath, new Uint8Array(await response.arrayBuffer()))
execFileSync('tar', ['-xzf', archivePath, '--strip-components=1', '-C', templateDir], { stdio: 'inherit' })

if (existsSync(overridesDir)) cpSync(overridesDir, templateDir, { recursive: true, force: true })
console.log('Portfolio template prepared with Li Yueyue overrides.')
