import InfoBox from "./InfoBox"

export default function InfoBar() {
    return (
        <div className='infoBar'>
			<InfoBox color='#009a00' text='0 заказов' type="мои заказы"/>
			<InfoBox color='rgb(255 25 25)' text='0 заказов' type="срочные"/>
			<InfoBox color='rgb(255 146 0' text='0 заказов' type="ждут выдачи"/>
			<InfoBox text='0 заказов' type="выполненные"/>
		</div>
    )
}