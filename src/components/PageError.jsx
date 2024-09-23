import { useBoundStore } from '@/store/useBoundStore'
import Link from 'next/link'
import { BiErrorCircle, BiArrowBack } from 'react-icons/bi'

export default function PageError () {
	const error = useBoundStore(state => state.error)

	return (
		<main className="text-slate-900 mainHome rounded-md absolute top-0 left-0 w-full h-screen text-center !bg-[length:30rem]">
			<div className='bg-white w-11/12 max-w-3xl px-5 mx-auto h-full py-4 flex items-center flex-col justify-center'>
				<BiErrorCircle className="text-8xl mb-4 text-red-500" />
				<h2 className='text-3xl'>
					<span className='text-blue-600'>{error[1].statusCode || 500}:</span> {(error[1].message && error[1].message) || 'त्रुटि हुई'}
				</h2>
				<p className='text-xl my-2'>
					उफ़! कुछ गलत हो गया। कृपया बाद में पुनः प्रयास करें या ऑफ़लाइन खेलें।
				</p>
				<nav className='flex gap-6 items-center mt-3'>
					<Link className='text-blue-600 underline text-lg' href='/'>
						<BiArrowBack className='inline-block text-2xl mr-2' />
						मुख्य पृष्ठ पर वापस जाएँ
					</Link>
				</nav>
			</div>
		</main>
	)
}
