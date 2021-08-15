import st from './Profile.module.scss'
import Mypost from './myposts/Mypost';

function Content() {
    return (
        
    <header className='content'>
            <div className={st.wrap_content_header_img}></div>
            
            <Mypost />
    </header>
    )
}
export default Content;