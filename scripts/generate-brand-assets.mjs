import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
const brandDir = path.join(publicDir, 'brand')
const pngDir = path.join(brandDir, 'png')
const svgDir = path.join(brandDir, 'svg')
const outputZip = path.join(publicDir, 'downloads', 'dagsolution-marka-kiti.zip')

const sizes = [1024, 512, 384, 192, 128, 64, 32]
const variants = [
  { name: 'dark', src: path.join(publicDir, 'images', 'dagsolution-logo.png') },
  { name: 'light', src: path.join(publicDir, 'images', 'dagsolution-light-logo.png') },
]

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

async function generatePNGs() {
  for (const variant of variants) {
    for (const size of sizes) {
      const outputPath = path.join(pngDir, `${variant.name}-${size}x${size}.png`)
      await sharp(variant.src)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(outputPath)
      console.log(`  ✓ ${variant.name}/${size}x${size}`)
    }
  }
}

function createZip() {
  const tmpDir = '/tmp/dagsolution-brand-kit'
  if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true })
  fs.mkdirSync(tmpDir, { recursive: true })

  const pngTarget = path.join(tmpDir, 'png')
  const svgTarget = path.join(tmpDir, 'svg')
  fs.mkdirSync(pngTarget, { recursive: true })
  fs.mkdirSync(svgTarget, { recursive: true })

  for (const variant of variants) {
    for (const size of sizes) {
      const src = path.join(pngDir, `${variant.name}-${size}x${size}.png`)
      const dest = path.join(pngTarget, `${variant.name}-${size}x${size}.png`)
      fs.copyFileSync(src, dest)
    }
  }

  fs.writeFileSync(path.join(svgDir, 'README.txt'),
    'SVG vektör logolar henüz mevcut değil.\nPNG logoları kullanabilir veya iletişime geçebilirsiniz: mustafa@dagsolution.com\n'
  )
  fs.writeFileSync(path.join(svgTarget, 'README.txt'),
    'SVG vektör logolar henüz mevcut değil.\nPNG logoları kullanabilir veya iletişime geçebilirsiniz: mustafa@dagsolution.com\n'
  )

  fs.writeFileSync(path.join(tmpDir, 'README.txt'),
    `DAGSolution — Marka Kiti
===========================
Web: https://dagsolution.com
İletişim: mustafa@dagsolution.com

Bu paket DAGSolution marka varlıklarını içerir.

İçindekiler:
  svg/                    — Vektör logolar (SVG format)
  png/                    — PNG logolar (çeşitli boyutlarda)

Boyutlar:
  - 1024×1024  (Yüksek çözünürlük, store)
  - 512×512    (Sosyal medya, maskable icon)
  - 384×384    (PWA)
  - 192×192    (Web manifest)
  - 128×128    (Chrome Web Store)
  - 64×64      (Favicon)
  - 32×32      (Tab icon)

Renk Paleti:
  - Mavi (primary):    #3B82F6
  - Açık Mavi:         #60A5FA
  - Turuncu (accent):  #F97316
  - Gradient:          #60A5FA → #A78BFA

Tipografi:
  - Başlıklar & Body:  Inter (sans-serif)
  - Kod & Teknik:      JetBrains Mono (monospace)

Daha fazla bilgi: https://dagsolution.com/brand
`
  )

  ensureDir(path.dirname(outputZip))
  execSync(`cd /tmp && zip -r "${outputZip}" dagsolution-brand-kit`, { stdio: 'ignore' })

  const stats = fs.statSync(outputZip)
  console.log(`  ✓ Zip oluşturuldu: ${outputZip} (${stats.size} bytes)`)

  fs.rmSync(tmpDir, { recursive: true })
}

async function main() {
  console.log('\n=== DAGSolution Marka Kiti Oluşturuluyor ===\n')

  await ensureDir(brandDir)
  await ensureDir(pngDir)
  await ensureDir(svgDir)

  console.log('→ PNG boyutları oluşturuluyor...')
  await generatePNGs()

  console.log('→ ZIP paketi oluşturuluyor...')
  createZip()

  console.log('\n✓ Marka kiti başarıyla oluşturuldu!\n')
}

main().catch(err => {
  console.error('Hata:', err)
  process.exit(1)
})
