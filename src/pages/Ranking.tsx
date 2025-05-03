import React from 'react';

const Ranking: React.FC = () => {
  // Sample ranking data with images
  const rankings = [
    { 
      id: 1, 
      name: '트랄라레로 트랄라라', 
      wins: 120, 
      losses: 30,
      imageUrl: 'https://i.namu.wiki/i/EuBIlfmMleszo5sYDjiJfBZkSLQ8piKmemqEJuT3sGkSDlpcT7__drDj4mJchqk2RcM9UfUC9xxM64ZkSnEqrZR4lH1mVzyRFJtRtgsR8mdkd_QwkYkmvYoGAfwFM10zQga-ONrF8F6xoGXzwxRmXA.webp' // Add your image URL here
    },
    { 
      id: 2, 
      name: '브르르브르르 빠타빔', 
      wins: 115, 
      losses: 25,
      imageUrl: 'https://i.namu.wiki/i/ZKpQLmCjqZccHtykLL78QJ9hnkCYr4DaUW8PIgWSybbwDORXiBr-shZGKda4OOjxcxvHvmcskNm6zPs7GOTQSW_4nLAuz7DdBmvDHSLVfQiYKZDoM5An1IUFvBVtSYnGFeSxB9V_NHToWW_0gTVRSg.webp' 
    },
    { 
      id: 3, 
      name: '만렙삐까츄', 
      wins: 110, 
      losses: 40,
      imageUrl: 'https://i.namu.wiki/i/5rKjeZBQ-EgtTFhjlpA2MVgob6MuNjyWgMrsyKt5C-N5CkwgxtHd9GaNzMH2pWtPtyraqriG1z78-6R_MAbWeL6ZNykcMQOcqXNFu4uDADnszXrQkoM-101UUZYTdDX9OC-nwlp2LVSiyaf47aPfpA.webp' 
    },
    { 
      id: 4, 
      name: '실험실 곰돌이', 
      wins: 100, 
      losses: 50,
      imageUrl: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/190916596_1870610889764877_1784548092570170192_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KoUFrvkGMiYQ7kNvwHljBLq&_nc_oc=AdkhJPHy4ECUfIYl23y1PDFqcl91Jutee3kWlKet-08VgLaBvBHNOSrag9uF7I4-zpY&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=hL89BGXhfk1jnCZhdHuoOA&oh=00_AfGeeVfixWJ-HAidovpOKuogklje-nw9mg8HV3JaKOB-xg&oe=683AA239'
    },
    { 
      id: 5, 
      name: '봄바르디로 크로코딜로', 
      wins: 95, 
      losses: 45,
      imageUrl: 'https://i.namu.wiki/i/ptYKRBTeb9s419TbRBciZG1bqvG_ZnqkLGrAIPiR3WRtYZlU2DGmwxNBP362FCw5bNT0u8BQq1JNzrTdpHOX-BTIbxsSNHJdB-itmOvKPUvT6xZBrf5jUN0sz-3kvipXQRaYdIgktQqY4HlrezW5QA.webp'
    },
  ];

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary-700">
        랭킹
      </h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-primary-700 uppercase tracking-wider"
                >
                  순위
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-primary-700 uppercase tracking-wider"
                >
                  캐릭터
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-primary-700 uppercase tracking-wider"
                >
                  승리
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-primary-700 uppercase tracking-wider"
                >
                  패배
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-primary-700 uppercase tracking-wider"
                >
                  승률
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rankings.map((character, index) => (
                <tr
                  key={character.id}
                  className="hover:bg-primary-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center h-8 w-8 rounded-full ${
                          index === 0
                            ? 'bg-yellow-100 text-yellow-600'
                            : index === 1
                            ? 'bg-gray-100 text-gray-600'
                            : index === 2
                            ? 'bg-orange-100 text-orange-600'
                            : 'bg-primary-100 text-primary-600'
                        } text-sm font-medium`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-4">
                      {character.imageUrl && (
                        <img
                          src={character.imageUrl}
                          alt={character.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      )}
                      <div className="text-sm font-medium text-gray-900">
                        {character.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-green-600">
                      {character.wins}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-red-600">{character.losses}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Math.round(
                        (character.wins /
                          (character.wins + character.losses)) *
                          100
                      )}
                      %
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ranking;