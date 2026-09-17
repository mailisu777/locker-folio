import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'

const root = process.cwd()
const templateDir = join(root, '.template')
const overridesDir = join(root, 'overrides')

if (existsSync(templateDir)) rmSync(templateDir, { recursive: true, force: true })

execFileSync('git', ['clone', '--depth', '1', 'https://github.com/qzz0518/locker-folio.git', templateDir], {
  stdio: 'inherit',
})

if (existsSync(overridesDir)) {
  cpSync(overridesDir, templateDir, { recursive: true, force: true })
}

console.log('Portfolio template prepared with Li Yueyue overrides.')
