export default function InfoBox({text, type, color}) {
    return (
        <div style={{ backgroundColor: color }} className='infoBox'>
            <span>{text}</span>
            <span>{type}</span>
		</div>
    )
}