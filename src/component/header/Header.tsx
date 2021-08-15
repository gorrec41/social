import st from './Header.module.scss'
import img1 from './../../img/header/logo.png'
function Header() {
    return (
        <header className='header'>
            <div className={st.wrap_logo}>
                <img src={img1} alt="logo" />
            </div>
        </header>
    )
}
export default Header;