class MainDish < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '豚肉の生姜焼き', ns1: 7.66, ns2: 20.81, ns3:25.22},
    { id: 3, name: '餃子',          ns1: 26.76, ns2: 8.28, ns3:13.56},
    { id: 4, name: 'ブリの照り焼き', ns1: 14.28, ns2: 18.59, ns3:17.08},
    { id: 5, name: 'ロールキャベツ', ns1: 12.11, ns2: 10.51, ns3:9.42},
  ]
  end