
import st from './Myprofil.module.scss';
import images from './ava/ava2.jpg'
import images1 from './ava/ava3.jpg'

function Myprofil(props:any) {
    return (
        
        <div className={st.myprofil}>
            <div className={st.wrap_myprofil}>
                <div className={st.ava}>
                    <img src={props.src} alt="ava" />
                </div>
                <ul className={st.myprofil_list}>
                    <li className={st.myprofil_item}>ggg</li>
                    <li className={st.myprofil_item}>gggg</li>
                    <li className={st.myprofil_item}>ggg</li>
                    <li className={st.myprofil_item}>ggg</li>
                    <li className={st.myprofil_item}>,mnnvb</li>
                </ul>
            </div>
        </div>
    )
}
export default Myprofil;