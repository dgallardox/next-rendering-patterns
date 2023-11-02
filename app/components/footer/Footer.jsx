import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>navitem</div>
      <div>navitem</div>
      <div id={styles.title}>Daily Byte</div>
    </div>
  );
}

export default Footer