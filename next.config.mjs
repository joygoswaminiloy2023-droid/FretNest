/** @type {import('next').NextConfig} */
const nextConfig = {
  /* [
  {
    "id": 1,
    "image": "https://m.media-amazon.com/images/I/61T+TmYiQdL.jpg"
  },
  {
    "id": 2,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXDtXuMz23IHHNv5FRIbBMJJBk-B6bsckrg&s"
  },
  {
    "id": 3,
    "image": "https://guitarparadise.com.bd/wp-content/uploads/2025/10/81L3DLHUNcL._SL1500_.jpg"
  },
  {
    "id": 4,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLK0PckqsTO6N1ANjr3iaExr4voyPuVMFQA&s"
  },
  {
    "id": 5,
    "image": "https://max.guitars/media/catalog/product/cache/9c38ccfcea1918ff5a2ffb8fcd20867d/p/_/p_region_rg550_bk_00_04.jpg"
  },
  {
    "id": 6,
    "image": "https://waltgracevintage.com/cdn/shop/products/IMG_7936.jpg?v=1738797476"
  },
  {
    "id": 7,
    "image": "https://acousticvibesmusic.com/cdn/shop/products/06608-1.jpg?v=1636474654"
  },
  {
    "id": 8,
    "image": "https://cdn.mos.cms.futurecdn.net/3yAmTDCUQNaNujhgoawGUP-1200-80.jpg"
  }
]*/
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
    
      },
      {
        protocol:'https',
        hostname:'encrypted-tbn0.gstatic.com'
      },
      {
        protocol:'https',
        hostname:'guitarparadise.com.bd'
      },
      {
        protocol:'https',
        hostname:'max.guitars'
      },
      {
        protocol:'https',
        hostname:'waltgracevintage.com'
      },
      {
        protocol:'https',
        hostname:'acousticvibesmusic.com'
      },
      {
        protocol:'https',
        hostname:'cdn.mos.cms.futurecdn.net'
      },
    ],
  },
};

export default nextConfig;
