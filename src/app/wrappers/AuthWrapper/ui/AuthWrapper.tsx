import {Outlet} from "react-router";
import styles from '../scss/styles.module.scss'
import img from '../../../../assets/img/home-page.png'

const AuthWrapper = () => {
return (
    <div className={styles.container}>
        <img src={img} alt={'login_img'} className={styles.img} />
        <div className={styles.form_container}>
            <Outlet />
        </div>
    </div>
)
}

export default AuthWrapper;
