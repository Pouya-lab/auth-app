import RingLoader from 'react-spinners/RingLoader'
import '../../styles/vendor/loader.scss'


function Loader() {
    
  return (
    <div className="wrapper">
        <div className="loader">
        <RingLoader size={150} color='#30E3CA'  />
        </div>
    </div>
  )
}

export default Loader