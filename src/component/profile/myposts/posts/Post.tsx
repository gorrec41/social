import st from './Post.module.scss'


function Post(props:any) {
    return (
        
        <div className={st.post}>
            <div className={st.wrap_ava}>
                <img src={props.src} alt="ava" />
            </div>
            <p>
                {props.text}
            </p>
        </div>
    )
}
export default Post;