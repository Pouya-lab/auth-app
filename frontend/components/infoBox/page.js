import '../../styles/vendor/infoBox.scss'

function InfoBox({ bgColor , title , count , icon }) {
  return (
    <>
        <div className={` info-box ${bgColor} `}>

            <span className='info-icon --color-white' >
                {icon}
            </span>
            <span className="info-text">
                {title}
                <h4>{count}</h4>
            </span>
        </div>
    </>
  )
}

export default InfoBox