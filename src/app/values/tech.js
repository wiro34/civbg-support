'use strict';

const Tech = [
  {
    id: '1-1',
    name: '海軍',
    level: 'one',
    img: 'https://lh5.googleusercontent.com/Pd4LAmAoMoFC1wesUZeE3-LMBhel80KHipJ0jtzVi19yr4tpJXp07bYZfl6dLO83-c655A=w1621-h783',
    politics: null,
    building: '造船所',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-2',
    name: '騎乗',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUVUQ0N0R4M3ZnLWM&authuser=0&v=1434296087013&sz=w1896-h875',
    politics: null,
    building: null,
    arms: null,
    moves: '3マス',
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-3',
    name: '金属加工術',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdmlIM25pYlVkYTA&authuser=0&v=1434296075547&sz=w1381-h875',
    politics: null,
    building: '兵舎',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-4',
    name: '航海術',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUMS1LU0tXbFFSSUU&authuser=0&v=1434296058994&sz=w1381-h875',
    politics: null,
    building: '港',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-5',
    name: '石工術',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUSnhlT19NRWNoZXM&authuser=0&v=1434296048145&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: '3個',
    coin: null,
    culturecard: null
  },
  {
    id: '1-6',
    name: '畜産',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUOU91OERVMWtvcU0&authuser=0&v=1434296043134&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-7',
    name: '通貨',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUbWdia2ZRRFo2TEk&authuser=0&v=1434296069884&sz=w1381-h875',
    politics: null,
    building: '市場',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-8',
    name: '哲学',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUcUh2SnlqNVVwUlk&authuser=0&v=1434296031646&sz=w1381-h875',
    politics: null,
    building: '神殿',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-9',
    name: '陶器',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUR0V2SXR4WkEzY1E&authuser=0&v=1434296080574&sz=w1381-h875',
    politics: null,
    building: '穀物庫 ',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: '上限+1',
  },
  {
    id: '1-10',
    name: '農業',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkURjZtcExTN1BXbzg&authuser=0&v=1434296064404&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-11',
    name: '筆記',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUZXk0R3MtSVh1Mms&authuser=0&v=1434296053644&sz=w1381-h875',
    politics: null,
    building: '図書館',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '1-12',
    name: '法律',
    level: 'one',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUbnN6cW1oUHpNbnM&authuser=0&v=1434296037426&sz=w1381-h875',
    politics: '共和制',
    building: '交易所',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-1',
    name: '活版印刷',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUVkVwUDRwU1N6TW8&authuser=0&v=1434296142855&sz=w1381-h875',
    politics: null,
    building: '大学',
    arms: null,
    moves: null,
    stack: ' 4個',
    coin: null,
    culturecard: null
  },
  {
    id: '2-2',
    name: '灌漑',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUVi0xQkpzalJyOE0&authuser=0&v=1434296148287&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-3',
    name: '官吏',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdi1qZm5uODF3TDA&authuser=0&v=1434296098155&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: 'コイン+1',
    culturecard: '上限+1',
  },
  {
    id: '2-4',
    name: '官僚制',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUakJXRXVTTUpTVnM&authuser=0&v=1434296103527&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: 'コイン+1',
    culturecard: null
  },
  {
    id: '2-5',
    name: '騎士道',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUaVRvWGNxQXJWVGc&authuser=0&v=1434296159398&sz=w1381-h875',
    politics: '封建制',
    building: null,
    arms: '騎兵2',
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-6',
    name: '君主政治',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdVhzdmhwTTE2N3c&authuser=0&v=1434296092885&sz=w1381-h875',
    politics: '君主政治',
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-7',
    name: '建築学',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUWUNwWlBHbGZtNjg&authuser=0&v=1434296125603&sz=w1381-h875',
    politics: null,
    building: '工房',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-8',
    name: '工学',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUTXI0QzNxd1RyY1U&authuser=0&v=1434296114499&sz=w1381-h875',
    politics: null,
    building: '上水道',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-9',
    name: '神秘主義',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUM3llWW5OZE9aNlE&authuser=0&v=1434296153655&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-10',
    name: '数学',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUeGFwMWN2Q3NtZXc&authuser=0&v=1434296131909&sz=w1381-h875',
    politics: null,
    building: null,
    arms: '砲兵2',
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-11',
    name: '帆走',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdnFXY2c0NlJhdVE&authuser=0&v=1434296120421&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: '4マス',
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-12',
    name: '兵站学',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUUHVrekJiQjM4VjA&authuser=0&v=1434296108792&sz=w1381-h875',
    politics: null,
    building: null,
    arms: '全兵2',
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '2-13',
    name: '民主主義',
    level: 'two',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdHkyYWN2OGRhdGc&authuser=0&v=1434296137312&sz=w1381-h875',
    politics: '民主主義',
    building: null,
    arms: '歩兵2',
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-1',
    name: '火薬',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUSHhtbWk0ZXlkOFE&authuser=0&v=1434296164691&sz=w1381-h875',
    politics: null,
    building: null,
    arms: '歩兵3',
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-2',
    name: '環境保護',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUNmQ3eVh5X1RmaXM&authuser=0&v=1434296170226&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-3',
    name: '教育',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUNTdMTmJSeDdQY3c&authuser=0&v=1434296175642&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-4',
    name: '共産主義',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUVHJXTmRITmdsdTA&authuser=0&v=1434296181670&sz=w1381-h875',
    politics: '共産主義',
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-5',
    name: '銀行制度',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUMWVrbUNKZ0xZSTg&authuser=0&v=1434296214954&sz=w1381-h875',
    politics: null,
    building: '銀行',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-6',
    name: '軍事学',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUbksxa0pDQWhvZ0k&authuser=0&v=1434296203790&sz=w1381-h875',
    politics: null,
    building: '士官学校',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-7',
    name: '蒸気機関',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUd0tuTEFWNW1wQVU&authuser=0&v=1434296197729&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: '5マス',
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-8',
    name: '神学',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUa1JnTFMzbDQ0MDA&authuser=0&v=1434296192206&sz=w1381-h875',
    politics: '原理主義',
    building: '大聖堂',
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: '上限+1',
  },
  {
    id: '3-9',
    name: '生物学',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUcTZnVFdzSC1WRDQ&authuser=0&v=1434296186914&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: '5個',
    coin: null,
    culturecard: null
  },
  {
    id: '3-10',
    name: '鋳金',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUUzhDTFo5Yk5Xc0k&authuser=0&v=1434296221166&sz=w1381-h875',
    politics: null,
    building: null,
    arms: '砲兵3',
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '3-11',
    name: '鉄道',
    level: 'three',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUSGFOd0hfdVMwTkE&authuser=0&v=1434296209389&sz=w1381-h875',
    politics: null,
    building: '鉄鉱山',
    arms: '騎兵3',
    moves: null,
    stack: null,
    coin: 'コイン+1',
    culturecard: null
  },
  {
    id: '4-1',
    name: '共通規格',
    level: 'four',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUa1QyWk9aRUgwcms&authuser=0&v=1434296248988&sz=w1381-h875',
    politics: null,
    building: null,
    arms: '歩兵4',
    moves: null,
    stack: '6個',
    coin: null,
    culturecard: null
  },
  {
    id: '4-2',
    name: '原子理論',
    level: 'four',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkURm8zMTJ0ODFweU0&authuser=0&v=1434296232119&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '4-3',
    name: 'コンピューター',
    level: 'four',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdkk4ZjhUczlCdU0&authuser=0&v=1434296237517&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: 'コイン+1',
    culturecard: null
  },
  {
    id: '4-4',
    name: '弾道学',
    level: 'four',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUX1MxcUJKeGFDODA&authuser=0&v=1434296260553&sz=w1381-h875',
    politics: null,
    building: null,
    arms: '砲兵4',
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '4-5',
    name: '内燃機関',
    level: 'four',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUZXBRdFpkSkJhZlU&authuser=0&v=1434296254662&sz=w1381-h875',
    politics: null,
    building: null,
    arms: '騎兵4',
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '4-6',
    name: '飛行機',
    level: 'four',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUcVRhWXN1MEw3Y28&authuser=0&v=1434296265960&sz=w1381-h875',
    politics: null,
    building: null,
    arms: '飛行機',
    moves: '6マス',
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '4-7',
    name: 'プラスチック',
    level: 'four',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUMFR2TE1TVmt1VXM&authuser=0&v=1434296226696&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '4-8',
    name: 'マスメディア',
    level: 'four',
    img: 'https://drive.google.com/thumbnail?id=0B2e1_JiUspkUREdsbG1aUnRGaDQ&authuser=0&v=1434296242840&sz=w1381-h875',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: '5-1',
    name: '宇宙飛行',
    level: 'five',
    img: '',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  },
  {
    id: 'newton',
    name: 'アイザック・ニュートン',
    level: 'extra',
    politics: null,
    building: null,
    arms: null,
    moves: null,
    stack: null,
    coin: null,
    culturecard: null
  }
];

Tech.findById = (techId) => _.find(Tech, (tech) => techId === tech.id);

export default Tech;