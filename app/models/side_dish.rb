class SideDish < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: 'ヒジキの煮物',        ns1: 12.63, ns2: 4.01, ns3:8.59},
    { id: 3, name: 'きんぴらごぼう',      ns1: 14.14, ns2: 1.2, ns3:3.08},
    { id: 4, name: 'ホウレン草のおひたし', ns1: 2.83, ns2: 3.4, ns3:0.32},
    { id: 5, name: 'コールスロー',        ns1: 8.18, ns2: 1.56, ns3:15.34},
  ]
  end