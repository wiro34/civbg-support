export const CIVILIZATIONS = [
  {
    id: 'aztec',
    name: 'アステカ',
    leader: 'モンテズマ',
    beginningTech: '2-2', // 灌漑
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'america',
    name: 'アメリカ',
    leader: 'リンカーン',
    beginningTech: '1-7', // 通貨
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'arabia',
    name: 'アラブ',
    leader: 'サラディン',
    beginningTech: '2-10', // 数学
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'england',
    name: 'イギリス',
    leader: 'エリザベス',
    beginningTech: '1-1', // 海軍
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'india',
    name: 'インド',
    leader: 'ガンジー',
    beginningTech: '1-10', // 農業
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'egypt',
    name: 'エジプト',
    leader: 'クレオパトラ',
    beginningTech: '2-7', // 建築学
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'greece',
    name: 'ギリシャ',
    leader: 'アレクサンダー',
    beginningTech: '2-13', // 民主主義
    government: '民主主義',
    distance: 2,
  },
  {
    id: 'zulu',
    name: 'ズールー',
    leader: 'シャカ',
    beginningTech: '1-6', // 畜産
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'spain',
    name: 'スペイン',
    leader: 'イザベル',
    beginningTech: '1-4', // 航海術
    government: '専制政治',
    distance: 3,
  },
  {
    id: 'china',
    name: '中国',
    leader: '武則天',
    beginningTech: '1-11', // 筆記
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'germany',
    name: 'ドイツ',
    leader: 'ビルマルク',
    beginningTech: '1-3', // 金属加工術
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'japan',
    name: '日本',
    leader: '徳川',
    beginningTech: '2-5', // 騎士道
    government: '封建制',
    distance: 2,
  },
  {
    id: 'france',
    name: 'フランス',
    leader: 'ナポレオン',
    beginningTech: '1-9', // 陶器
    government: '専制政治',
    distance: 2,
    abilities: {
      battleBonus: 2
    }
  },
  {
    id: 'mongol',
    name: 'モンゴル',
    leader: 'チンギス',
    beginningTech: '1-2', // 騎乗
    government: '専制政治',
    distance: 2,
  },
  {
    id: 'roma',
    name: 'ローマ',
    leader: 'カエサル',
    beginningTech: '1-12', // 法律
    government: '共和制',
    distance: 2,
  },
  {
    id: 'russia',
    name: 'ロシア',
    leader: 'エカチェリーナ',
    beginningTech: '3-4', // 共産主義
    government: '共産主義',
    distance: 2,
  },
]

export function findCivById (id) {
  return CIVILIZATIONS.find((civ) => id === civ.id)
}
