import styles from './ProfileStyles.module.css';
import profileImg from '../../assets/profile-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Profile() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    
    return (
    <section id="profile" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.profile} src={profileImg} alt="Profile picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>   
        </div>
        <div className={styles.info}>
            <h1>Dolly Kaur</h1>
            <h2>Software Engineer</h2>
            <span>
                <a href="https://linkedin.com/" target="_blank">
                   <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                   <img src={githubIcon} alt="Github Icon" />
                </a>
            </span>
            <p>
                With a passion for developing modern application for commercial business.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Profile