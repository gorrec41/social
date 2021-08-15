import Post from './posts/Post';
import st from './Mypost.module.scss';
import images from './ava/ava2.jpg'
import images1 from './ava/ava3.jpg'

function Mypost() {
    return (
        
    <div className={st.mypost}>
            <Post src={images} text='привет' />
            <Post src={images1} text='Hello'/>
    </div>
    )
}
export default Mypost;