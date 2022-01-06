const array = [1, 2, 3];

const array_2 = [
  [1, 2, 3],
  [1, 2, 3]
];

console.log(array_2[0][2]);

// オブジェクト
const member = {
  'name': 'ホンダ',
  'height': 170,
  'hobby': 'サッカー'
};

console.log(member.height);


const member_2 = {
  '本田': {
    'height': 170,
    'hobby': 'サッカー'
  },
  '香川': {
    'height': 160,
    'hobby': 'サッカー'
  }
};

console.log(member_2['香川'].height);


const member_3 = {
  '1kumi': {
    '本田': {
      'height': 170,
      'hobby': 'サッカー'
    },
    '香川': {
      'height': 160,
      'hobby': 'サッカー'
    }
  },
  '2kumi': {
    '川島': {
      'height': 170,
      'hobby': 'サッカー'
    },
    '長友': {
      'height': 155,
      'hobby': 'サッカー'
    }
  }
}

console.log(member_3['2kumi']['長友'].height);
