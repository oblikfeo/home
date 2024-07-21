import React from 'react';
import Menu from './components/Menu'
import Title from './components/Title';
import InfoBox from './components/InfoBox';
import InfoBar from './components/InfoBar';
import Search from './components/Search';



function App() {
	return <div>
		<Menu />
		<Title />
		<InfoBar />
		<Search />
		<table className='head'>
			<tr>
				<th>Заказ №</th>
				<th>Статус</th>
				<th>Создан</th>
				<th>Тип устройства</th>
				<th>Бренд</th>
			</tr>
		</table>
	</div>;
	
}

export default App;