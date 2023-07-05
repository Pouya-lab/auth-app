import styles from './card.module.scss'


//anything is going to be inside card they are going to be cards children and cardClass 
function Card({ children , cardClass }) {
  return (
    <>
        <div className={ `${styles.card} ${cardClass}` }>
            {children}
        </div>
    </>
  )
}

export default Card