import { useState } from 'react';
import { questions, results } from '@/data/test-data';

type Gender = '남' | '여' | null;
type Stage = 'start' | 'question' | 'result';
type PersonalityType = 'C' | 'D';

export default function HomePage() {
  const [stage, setStage] = useState<Stage>('start');
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState<Gender>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ C: 0, D: 0 });
  const [finalResult, setFinalResult] = useState<PersonalityType | null>(null);

  const handleStartTest = () => {
    if (!userName.trim()) {
      alert('이름을 입력해주세요!');
      return;
    }
    if (!gender) {
      alert('성별을 선택해주세요!');
      return;
    }
    setStage('question');
  };

  const handleAnswer = (type: PersonalityType) => {
    const newScore = { ...score, [type]: score[type] + 1 };
    setScore(newScore);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const result: PersonalityType = newScore.C >= newScore.D ? 'C' : 'D';
      setFinalResult(result);
      setStage('result');
    }
  };

  const handleRestart = () => {
    setStage('start');
    setUserName('');
    setGender(null);
    setCurrentQuestionIndex(0);
    setScore({ C: 0, D: 0 });
    setFinalResult(null);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];
  const resultData = finalResult ? results[finalResult] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 md:p-10">
        
        {/* 시작 페이지 */}
        {stage === 'start' && (
          <div className="text-center">
            <div className="text-8xl mb-5">🐱🐶</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">고양이상 vs 강아지상</h1>
            <p className="text-gray-600 text-sm mb-8">나는 도도한 고양이? 활발한 강아지?</p>

            <input
              type="text"
              placeholder="이름을 입력하세요"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-3 mb-3 border-2 border-gray-200 rounded-xl text-base focus:border-purple-600 focus:outline-none transition-colors"
            />

            <div className="mb-5">
              <p className="text-sm text-gray-600 mb-2">성별을 선택하세요</p>
              <div className="flex gap-3">
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="남"
                    checked={gender === '남'}
                    onChange={() => setGender('남')}
                    className="hidden"
                  />
                  <div className={`py-3 px-4 border-2 rounded-xl text-center transition-all ${
                    gender === '남'
                      ? 'border-purple-600 bg-gradient-to-br from-purple-600 to-purple-700 text-white'
                      : 'border-gray-200 text-gray-700 hover:border-purple-600'
                  }`}>
                    남성
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="여"
                    checked={gender === '여'}
                    onChange={() => setGender('여')}
                    className="hidden"
                  />
                  <div className={`py-3 px-4 border-2 rounded-xl text-center transition-all ${
                    gender === '여'
                      ? 'border-purple-600 bg-gradient-to-br from-purple-600 to-purple-700 text-white'
                      : 'border-gray-200 text-gray-700 hover:border-purple-600'
                  }`}>
                    여성
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={handleStartTest}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-lg font-bold rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all active:translate-y-0"
            >
              테스트 시작하기
            </button>
          </div>
        )}

        {/* 질문 페이지 */}
        {stage === 'question' && currentQuestion && (
          <div>
            <div className="mb-8">
              <div className="text-sm text-gray-600 mb-2">
                {currentQuestionIndex + 1} / {questions.length}
              </div>
              <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-600 to-purple-700 h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="text-xl font-bold text-gray-800 mb-8 leading-relaxed break-keep">
              {currentQuestion.question}
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.type)}
                  className="w-full py-4 px-5 bg-gray-50 border-2 border-gray-200 rounded-xl text-left text-gray-800 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:translate-x-1 transition-all"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 결과 페이지 */}
        {stage === 'result' && resultData && (
          <div>
            <div className="text-center mb-6">
              <div className="text-8xl mb-5">{resultData.emoji}</div>
              <div className="text-sm text-gray-600">{userName}님의 결과는</div>
              <div className={`text-4xl font-black mt-2 mb-5 ${
                finalResult === 'C' ? 'text-purple-600' : 'text-orange-500'
              }`}>
                {resultData.name}
              </div>
              <div className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-5 rounded-xl text-left">
                {resultData.description}
              </div>
            </div>

            <div className="mb-8 text-left">
              <h3 className="text-base font-bold text-gray-800 mb-3">📌 당신의 특징</h3>
              <ul className="space-y-2">
                {resultData.characteristics.map((char, index) => (
                  <li key={index} className="text-sm text-gray-700 pl-6 relative">
                    <span className="absolute left-0 text-purple-600 font-bold">✓</span>
                    {char}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 text-left border-t border-gray-200 pt-8">
              <h3 className="text-base font-bold text-gray-800 mb-4">🎁 당신에게 추천하는 아이템</h3>
              <div className="space-y-3">
                {resultData.products.map((product, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-gray-800 text-sm">{product.name}</div>
                      <div className="text-xs text-gray-600 mt-1">{product.reason}</div>
                    </div>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:shadow-md transition-shadow ml-3"
                    >
                      보러가기
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleRestart}
              className="w-full py-4 bg-gray-200 text-gray-700 text-base font-bold rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              다시 테스트하기
            </button>

            <div className="mt-8 text-xs text-gray-500 leading-relaxed bg-gray-50 p-4 rounded-lg">
              이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
