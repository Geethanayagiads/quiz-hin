import { useBoundStore } from '@/store/useBoundStore'
import playSound from '@/helpers/playSound'
import starIcon from '@/assets/star.svg'
import Image from 'next/image'

export default function QuestionSlider ({ changueCurrent, setTime, getAnotherQuestions }) {
	const { questions, queries, loadingInfinity, setUserAnswer, error, useLivesCard, setWin, wildCards, currentQuestion, setScore, win, score } = useBoundStore(state => state)

	function validateAnswer (e) {
		const correct = e.target.textContent === questions[currentQuestion - 1].correctAnswer

		e.target.parentNode.classList.add(correct ? 'shake-left-right' : 'vibrate')
		e.target.classList.add(correct ? 'correctAnswer' : 'wrongAnswer')

		document.querySelectorAll(`.answers-${currentQuestion} button`).forEach(answer => {
			answer.disabled = true
			if (!correct && answer.textContent === questions[currentQuestion - 1].correctAnswer) {
				answer.parentNode.classList.add('shake-left-right')
				answer.classList.add('correctAnswer')
			}
		})

		playSound(correct ? 'correct_answer' : 'wrong_answer', 0.3)
		if (!queries.infinitymode) setUserAnswer(currentQuestion - 1, correct ? 1 : -1)

		if (queries.infinitymode) {
			if (correct) {
				if (score !== 1 && score % 5 === 0) getAnotherQuestions()
			} else {
				if (wildCards.lives > 0) {
					if (score !== 1 && score % 5 === 0) getAnotherQuestions()
					useLivesCard()
				} else return setWin(false)
			}
		} else {
			if (!correct) {
				if (wildCards.lives > 0) {
					useLivesCard()
					if (score === Number(queries.questions)) return setWin(true)
				} else return setWin(false)
			} else if (score === Number(queries.questions)) return setWin(true)
		}

		setTimeout(() => {
			setScore(score + 1)
			setTime(Number(queries.time))
			if (queries.infinitymode && score !== 1 && score % 5 === 0) changueCurrent(1)
			else changueCurrent(currentQuestion + 1)
		}, 1000)
	}

	if (error[0]) {
		return <div className='flex h-32 md:h-[6.5rem] items-center justify-center rounded-md bg-red-500 px-5 md:px-10 py-6 text-white text-xl font-semibold'>
			अगले प्रश्नों को लोड करने में एक त्रुटि हुई...
		</div>
	}

	if (loadingInfinity || !questions) {
		return <div className='flex h-32 md:h-[6.5rem] items-center justify-center rounded-md bg-blue-500 px-5 mdpx-10: py-6 text-white text-xl font-semibold'>
			अगले प्रश्न लोड हो रहे हैं...
		</div>
	}

	return (
		<main className='relative max-w-2xl min-h-[28rem] md:min-h-[16rem] mx-auto h-1/2'>
			{
				questions.map((question, i) => {
					return (
						<div key={question.correctAnswer + i} className={`transition-all duration-500 ${i === 0 ? '' : 'slide-right'} absolute text-center w-full`} id={'question-' + (i + 1)}>
							{
								question.ia && <div className='absolute -top-6 -right-6 p-2'>
									<Image src={starIcon} width={50} height={50} alt='AI द्वारा उत्पन्न प्रश्न' title='AI द्वारा उत्पन्न प्रश्न' />
								</div>
							}
							<p className='rounded-md h-32 md:h-[6.5rem] flex justify-center items-center bg-blue-500 px-5 md:px-10 py-6 text-white text-xl font-semibold mb-3'>
								{question.question}
							</p>

							<ul className={`md:columns-2 mt-4 ${'answers-' + (i + 1)}`}>
								{question.answers.map((answer, j) => (
									<li key={j + answer} className="relative">
										<button
											className={`${'answer-' + (j + 1)} peer btn-primary w-full shadow-sm pl-12 py-3 px-5 rounded mb-6 ${answer.length > 24 ? 'text-sm' : ''}`}
											disabled={!queries.infinitymode && (score !== i + 1 || currentQuestion !== i + 1 || win !== undefined)}
											onClick={validateAnswer}>
											{answer || '---'}
										</button >

										<Image className='absolute pointer-events-none left-2 top-1 peer-disabled:translate-y-0 peer-hover:translate-y-[0.25em] peer-active:translate-y-[0.75em] transition-transform z-20 invert' src={`/letters/letter-${['a', 'b', 'c', 'd'][j]}.svg`} width={40} height={40} alt={`प्रश्न ${j + 1}]}`} />
									</li>
								))}
							</ul>
						</div>
					)
				})
			}
		</main>
	)
}
