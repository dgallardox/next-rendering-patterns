import styles from "./pageTitle.module.css"

const PageTitle = ({title = "no title"}) => {
  return (
    <>
      <div className={styles.title}>{ title }</div>
    </>
  )
}

export default PageTitle;