class StapleFood < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '米', ns1: 51.9, ns2: 3, ns3:0.3},
    { id: 3, name: 'パン', ns1: 29.9, ns2: 5.3, ns3:2.4},
    { id: 4, name: '麺', ns1: 67.16, ns2: 11.27, ns3:1.38},
    { id: 5, name: 'パスタ', ns1: 80.5, ns2: 14.5, ns3:2.25},
  ]
  end