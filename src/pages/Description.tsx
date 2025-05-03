import React from 'react';

const Description: React.FC = () => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary-700">
        설명
      </h2>
      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <div className="prose">
          <h3 className="text-xl font-semibold mb-4">AI 배틀이란?</h3>
          <p className="text-gray-700 mb-6">
            AI 배틀은 여러분이 만든 캐릭터들이 서로 대결하는 게임입니다.
            각 캐릭터는 고유한 특성과 이야기를 가지고 있으며, 
            이들의 대결을 통해 재미있는 결과를 만들어낼 수 있습니다.
          </p>

          <h3 className="text-xl font-semibold mb-4">게임 방법</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>홈 화면에서 캐릭터를 생성합니다 (최대 5개)</li>
            <li>배틀 탭에서 대결할 캐릭터를 선택합니다</li>
            <li>상대 캐릭터와의 대결을 시작합니다</li>
            <li>승리한 캐릭터는 랭킹에 기록됩니다</li>
          </ol>

          <h3 className="text-xl font-semibold my-4">캐릭터 생성 팁</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>독특하고 재미있는 캐릭터 설정을 만들어보세요</li>
            <li>캐릭터의 특징을 잘 나타내는 이미지를 선택하세요</li>
            <li>캐릭터의 배경 스토리를 상세히 작성해보세요</li>
            <li>현재 AI 호출 기능은 구현 예정 중에 있습니다</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;