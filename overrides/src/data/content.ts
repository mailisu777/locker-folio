/* 站点全部文案与作品数据 —— 黎悦悦作品集 V1 */

export const SITE = {
  owner: 'LI YUEYUE',
  tagline: "LI YUEYUE — PORTFOLIO '26",
  year: '2026',
}

/* ── 出处与源码 ───────────────────────────────────────
 * 本站基于 qzz0518/locker-folio 二次开发；原模板的视觉创意出处继续保留。
 * Credit 组件仍然展示原作者与源码信息。 */
export const CREDIT = {
  author: 'momo',
  platform: '小红书',
  originUrl:
    'https://www.xiaohongshu.com/discovery/item/6a852ae7000000002500b24e?xsec_token=ABxWdb99F51QhPGOvNNuLGxYSbTeGIKFnMDujjIeP1Kr8=',
  repoUrl: 'https://github.com/qzz0518/locker-folio',
}

export const NAV = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'CAPABILITIES' },
  { id: 'work', label: 'FEATURED WORK' },
  { id: 'contact', label: 'CONTACT' },
] as const

export const ABOUT = {
  cardNo: 'NO. 2027',
  title: ['BASIC', 'INFORMATION'],
  titleCn: '关于我',
  sub: 'CONTENT / SOCIAL / AI',
  fields: [
    { k: 'NAME / 姓名', v: '黎悦悦 LI YUEYUE' },
    { k: 'SCHOOL / 学校', v: '汕头大学' },
    { k: 'MAJOR / 专业', v: '网络与新媒体' },
    { k: 'GRAD / 届别', v: '2027 届' },
    { k: 'FOCUS / 方向', v: '内容策划 · 内容运营' },
    { k: 'AI / 能力', v: 'AI 图像 · AI 视频 · 内容生产' },
  ],
  email: '23yyli1@stu.edu.cn',
  phone: 'CONTENT / SOCIAL / AI',
  stampTop: 'PORTFOLIO',
  stampMid: 'LYY',
  stampRing: 'CONTENT · SOCIAL · AI · 2026 ·',
  footL: 'MAKE IDEAS SHIPPABLE',
  footR: 'LI YUEYUE · PORTFOLIO · 2026',
}

export type SkillCard = {
  no: string
  kicker: string
  title: string
  desc: string
  rows: { k: string; v: string }[]
  bg: string
  fg: string
}

export const SKILLS: SkillCard[] = [
  {
    no: '01',
    kicker: '01 / CONTENT STRATEGY',
    title: '内容策划',
    desc: '从选题、对标拆解到脚本和内容结构，把想法转成可以执行和上线的方案。',
    rows: [
      { k: 'PLANNING', v: '选题策划 / 脚本 / 栏目设计' },
      { k: 'RESEARCH', v: '竞品调研 / 爆款拆解 / 用户反馈' },
      { k: 'PRODUCTION', v: '拍摄 / 剪辑 / 发布执行' },
    ],
    bg: '#1b28d8',
    fg: '#ffffff',
  },
  {
    no: '02',
    kicker: '02 / SOCIAL & OPERATION',
    title: '内容运营',
    desc: '结合完播、互动和评论反馈判断内容表现，持续调整选题、结构和表达。',
    rows: [
      { k: 'PLATFORM', v: '抖音 / 小红书 / 视频号 / 微博' },
      { k: 'REVIEW', v: '数据复盘 / 内容迭代 / 平台适配' },
      { k: 'PROJECT', v: 'IP 账号 / 品牌官号 / 从 0 到 1' },
    ],
    bg: '#c8f322',
    fg: '#12140f',
  },
  {
    no: '03',
    kicker: '03 / AI CONTENT PRODUCTION',
    title: 'AI 内容生产',
    desc: '熟悉 AI 图像、AI 视频和数字人内容制作，用于创意测试、素材生产和内容迭代。',
    rows: [
      { k: 'IMAGE', v: '参考图设计 / 视觉生成 / 角色一致性' },
      { k: 'VIDEO', v: '分镜 / 场景控制 / 动作拆分 / 连续性' },
      { k: 'WORKFLOW', v: '提示词 / SOP / 生产流程优化' },
    ],
    bg: '#ffffff',
    fg: '#14161a',
  },
]

export const FOLDERS = [
  {
    id: 'video',
    en: ['XIE YAOYAO'],
    cn: '谢幺幺爱跳操｜卡点游戏跟练',
    bg: '#0b0b0d',
    fg: '#e0322a',
    cnFg: '#e0322a',
    x: -30,
    y: 12,
    rot: -6,
    z: 1,
  },
  {
    id: 'design',
    en: ['K COACH'],
    cn: 'K 教｜AI 漫剧 × 消费品',
    bg: '#c8f322',
    fg: '#1b28d8',
    cnFg: '#1b28d8',
    x: 0,
    y: 0,
    rot: -7,
    z: 3,
  },
  {
    id: 'photograph',
    en: ['KEEP', 'OFFICIAL'],
    cn: 'Keep 官方账号｜品牌内容与 AI 短片',
    bg: '#1b28d8',
    fg: '#c8f322',
    cnFg: '#ffffff',
    x: 30,
    y: -18,
    rot: 3,
    z: 2,
  },
  {
    id: 'website',
    en: ['RABBIT', 'IP'],
    cn: '兔子运动 IP｜从 0 到 1 孵化',
    bg: '#f8f8f6',
    fg: '#14161a',
    cnFg: '#14161a',
    x: 22,
    y: 20,
    rot: 2,
    z: 2,
  },
] as const

export const POSTERS = [
  { src: 'greenapple', title: 'GREEN APPLE' },
  { src: 'happynewyear', title: 'HAPPY NEW YEAR' },
  { src: 'streamnow', title: 'STREAM NOW' },
  { src: 'butterfly', title: '无人之境 · UNMANNED REALM' },
  { src: 'frangipani', title: 'WHERE FRANGIPANI FALLS' },
  { src: 'chocaward', title: '年度创新糖巧奖' },
  { src: 'childhood', title: 'HELLO CHILDHOOD MEMORIES' },
  { src: 'yexing', title: '夜行之梦 · DREAM IN FLIGHT' },
  { src: 'chocmint', title: '薄荷味夹心黑巧克力' },
  { src: 'grassfest', title: '草地音乐节 · GRASS FEST' },
  { src: 'research', title: 'US-CHINA RESEARCH TRENDS' },
]

export const MAGAZINE_PAGES = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6']

export const IP_DESIGN = {
  kicker: '03 / IP DESIGN',
  title: 'IP DESIGN',
  cn: 'IP 形象设计',
  desc: '围绕一个圆润的原创角色展开：从基础形体、材质到延展物料，建立一套可复用的形象语言。',
  swatches: [
    { name: 'CLAY', hex: '#e3d3bb' },
    { name: 'SAND', hex: '#d6c3a5' },
    { name: 'CREAM', hex: '#f2eadd' },
    { name: 'INK', hex: '#2c2925' },
  ],
  specs: [
    { k: 'FORM', v: '球体 / 圆角几何体' },
    { k: 'MATERIAL', v: '哑光陶土 · 微磨砂' },
    { k: 'OUTPUT', v: '3D 模型 / 表情包 / 周边' },
  ],
}

export const PHOTOS = [
  'p1', 'p4', 'p2', 'p6',
  'p5', 'p3', 'p6', 'p1',
  'p2', 'p5', 'p4', 'p3',
  'p6', 'p1', 'p3', 'p5',
]

export const VIDEOS = [
  {
    no: '01',
    en: 'CHARACTER PV',
    cn: '动漫单人角色 PV',
    desc: 'Minimax 辅助生成制作二次元风格单人角色宣传短片',
    cover: 'pv1',
    href: 'https://www.feicut.com/fv/FVf0hc366wam?cm=1&fc=2&p=0',
  },
  {
    no: '02',
    en: 'ACTION CUT',
    cn: '动作向动漫 PV',
    desc: '多角色动作分镜与节奏剪辑试验',
    cover: 'pv2',
    href: 'https://www.feicut.com/fv/FVbhfppjrege?cm=1&fc=1&p=0',
  },
]

export const WEBSITES = [
  {
    no: '01',
    slug: 'COFFEE / IN CHINA',
    title: ['Coffee / In', 'China'],
    kicker: 'DATA JOURNALISM · WEB',
    desc: '中国咖啡市场在消费降级、价格竞争与情绪经济之间的增长逻辑。',
    cover: 'coffee',
    glow: '#f2d49a',
    href: '#',
  },
  {
    no: '02',
    slug: 'SHORT DRAMA / OVERSEAS',
    title: ['Short Drama /', 'Overseas'],
    kicker: 'FEATURE · WEB',
    desc: '短剧出海：内容工业化生产与海外分发链路的一次拆解。',
    cover: 'drama',
    glow: '#f0bfa4',
    href: '#',
  },
  {
    no: '03',
    slug: 'WECHAT / ARTICLE',
    title: ['WeChat /', 'Article'],
    kicker: 'EDITORIAL · 图文',
    desc: '公众号长图文写作与版式：把调研转成可读、可传播的叙事。',
    cover: 'wechat',
    glow: '#d7e3a4',
    href: '#',
  },
]

export const NOTE_COLORS = ['#cfe0c3', '#f0e6a8', '#e8b7b7', '#a9c9dd', '#e5cfe0', '#d8cdb8']

export const SEED_NOTES = [
  { id: 's1', text: '', color: '#cfe0c3', x: 14, y: 42, rot: -2 },
  { id: 's2', text: '', color: '#f0e6a8', x: 70, y: 12, rot: 3 },
  { id: 's3', text: '', color: '#e8b7b7', x: 80, y: 33, rot: -3 },
]
