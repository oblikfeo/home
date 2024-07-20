import React from 'react';
import Menu from './components/Menu'
import Title from './components/Title';
import InfoBox from './components/InfoBox';



function App() {
	return <div>
		<Menu />
		<Title />
		<section className='infoBar'>
			<InfoBox text='0 заказов'/>
			<InfoBox text='123'/>
			<InfoBox text='123'/>
			<InfoBox text='123'/>
		</section>
	</div>;
	
}

export default App;