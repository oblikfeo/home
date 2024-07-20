import logo from '../img/React.png';

export default function Menu() {
	return(
		<div className='menu'>
			<img className='logo' src={logo} />
			<button className='but'>Заказы</button>
			<button className='but'>Настройки</button>
		</div>
	)
}