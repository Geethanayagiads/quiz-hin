import { ImInfinite } from 'react-icons/im'
import { BiTimeFive } from 'react-icons/bi'
import { TbDeviceGamepad2 } from 'react-icons/tb'

const gameModes = [
	{
		icon: <TbDeviceGamepad2 className='text-3xl' />,
		title: 'क्लासिक',
		description: 'जीतने के लिए बिना असफल हुए प्रश्न पूरे करें! आपके पास सहायक विकल्प हैं जो आपकी मदद करेंगे'
	},
	{
		icon: <BiTimeFive className='text-3xl' />,
		title: 'समय',
		description: 'जीतने के लिए समय सीमा के भीतर प्रश्न पूरे करें! आप सहायक विकल्पों का उपयोग कर सकते हैं'
	},
	{
		icon: <ImInfinite className='text-3xl' />,
		title: 'अनंत',
		description: 'जितने अधिक प्रश्न आप हल कर सकें, उतना ही अपना रिकॉर्ड तोड़ें! आप सहायक विकल्पों का उपयोग कर सकते हैं'
	}
]

export default function GameModes () {
	return null;
}
