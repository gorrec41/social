import st from './Saidbare.module.scss'
function Saidbare() {
    return (
        <header className='saidbare'>
            <div className={st.wrap_list}>
                <ul className={st.list_saidbare}>
                    <li className={st.item_saidbare}>
                        <a href="#!" className={st.link_saidbare}>Профиль</a>
                    </li>
                    <li className={st.item_saidbare}>
                        <a href="#!" className={st.link_saidbare}>Сообщения</a>
                    </li>
                    <li className={st.item_saidbare}>
                        <a href="#!" className={st.link_saidbare}>Новости</a>
                    </li>
                    <li className={st.item_saidbare}>
                        <a href="#!" className={st.link_saidbare}>Музыка</a>
                    </li>
                    <li className={st.item_saidbare}>
                        <a href="#!" className={st.link_saidbare}>Настройки</a>
                    </li>
                </ul>
            </div>

        </header>
    )
}
export default Saidbare;