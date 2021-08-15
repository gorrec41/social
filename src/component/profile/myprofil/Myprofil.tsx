
import st from './Mypost.module.scss';
import images from './ava/ava2.jpg'
import images1 from './ava/ava3.jpg'

function Myprofil(props:any) {
    return (
        
        <div className={st.myprofil}>
            <div className={st.wrap_myprofil}>
                <img src={props.src} alt="ava" />
                <ul className={st.myprofil_list}>
                    <li className={st.myprofil_item}></li>
                    <li className={st.myprofil_item}></li>
                    <li className={st.myprofil_item}></li>
                    <li className={st.myprofil_item}></li>
                    <li className={st.myprofil_item}></li>
                </ul>
            </div>
        </div>
    )
}
export default Myprofil;