import LinkComponent from '../LinkComponent/LinkComponent';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import membersInfo from '../Members/membersInfo';
import '../LinkComponent/LinkComponent.css';
import './SingleMember.css';

const SingleMember = () => {
    const {id} = useParams()

    return <div className='member-container'>
        <h1>{membersInfo[id].name}</h1>
        <div className="photo-and-description">

        {
            membersInfo[id].realProfilePicture ? 
            <img src={membersInfo[id].realProfilePicture} alt="member-photo" />
            :
            <img src="https://ik.imagekit.io/qxje7xjia/Profile%20Pics/member-placeholder-img.jpg?updatedAt=1758781177597" alt="member-placeholder-photo" />
        }
        
        <p>Краток опис на живот и дела</p>
        </div>
        <div className='works'>
            <h2>Дела</h2>
            <div className='works-container'>
              {
                membersInfo[id].works.map((work, index) => {
                    return <div className='work' key={index}>
                        {
                            work.img === null ? <img src="https://ik.imagekit.io/qxje7xjia/Profile%20Pics/comic-placeholder-img.jpg?updatedAt=1758781177502" 
                            alt="comic-placeholder-pic" 
                            />
                            :
                            <img src={work.img} alt="work-image" />
                        }
                        
                        <h4>{work.name}</h4><br/>
                        <h4>{work.year}</h4>
                        {work.read && <Link className='reading-link' to={work.read} target='_blank' >Читни</Link>}
                        
                    </div>
                })
              }  
            </div>
        </div>
        <Link to={'/членови'} className='hover-underline back-to-category' >Назад во категорија членови</Link>
        <LinkComponent />
    </div>
}

export default SingleMember;