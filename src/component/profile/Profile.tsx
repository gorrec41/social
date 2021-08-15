import st from './Profile.module.scss'
import Mypost from './myposts/Mypost';
import Myprofil from './myprofil/Myprofil';
import image from './myposts/ava/ava2.jpg'

function Content() {
    return (
        
    <div className='content'>
            <div className={st.wrap_content_header_img}></div>
            <div className={st.content_blocks}>
                <Myprofil src={image}/>
                <Mypost />
            </div>
    </div>
    )
}
export default Content;