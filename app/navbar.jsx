import styles from './navbar.module.css';

export const NavBar = ()=>{
  return(
    <>
    <div className={styles.rootContainer}>
    <div className={styles.navBarContainer}>
      <div className={styles.navBarLeft}>
        <h1>T S</h1>
      </div>
      <div className={styles.navBarRight}>
        <a>Work</a>
        <a>Projects</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </div>
    </div>
    </>
  )
}