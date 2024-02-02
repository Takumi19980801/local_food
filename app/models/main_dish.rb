class MainDish < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '豚肉の生姜焼き' },
    { id: 3, name: '餃子' },
    { id: 4, name: 'ブリの照り焼き' },
    { id: 5, name: 'ロールキャベツ' },
  ]
  end