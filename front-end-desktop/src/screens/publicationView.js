
import React from 'react';
import "./publicationView.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye, faHeart, faBookmark, faShare, faInfoCircle, faComment, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark} from '@fortawesome/free-regular-svg-icons';

export default function PublicationView() {
  return (
    <div className='container'>
        <div className='body-container'>
          <div className='body-perfil'>
            <img
              src={require('../assets/userExample/GenericUserImage.png')}
              alt="Descrição da imagem"
              width="50" 
              height="50" 
              className='userImg'
            />
            <text className='userName'>
              Gustavo
            </text>
            <button className='card-follow'>
              <text className='follow'>
                Seguir
              </text>
            </button>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faEye} />
            <text className='numberView'>1,8M</text>
            <button className='button'>
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: '15px', color: 'red' }} />
              <text className='numberView'>5</text>
            </button>
            <button className='button'>
              <FontAwesomeIcon icon={farBookmark} style={{ fontSize: '15px', color: 'gray' }} />
            </button>
            <button className='button'>
              <FontAwesomeIcon icon={faShare} />
            </button>
          </div>
        </div>
        <div>
          <text>Player</text>
        </div>
        <div>
          <div className='title-description'>
            <FontAwesomeIcon icon={faInfoCircle} />
            <text>Descrição</text>
          </div>
          <div className='res-info'>
            <text>
              texto da descrição
            </text>
          </div>
        </div>
        <div>
          <div className='title-comments'>
            <FontAwesomeIcon icon={faComment} />
            <text>Comentáros</text>
          </div>
          <div>
            <div className='text-title-comments'>
              <img
                src={require('../assets/userExample/GenericUserImage.png')}
                alt="Descrição da imagem"
                width="20" 
                height="20" 
                className='userImg'
              />
              <text className='title-name-comments'>gustavo</text>
            </div>
            <text>texto do comentario</text>
          </div>
          <div className='add-comments'>
            <input className="input-comments" placeholder='adicionar um comentário'/>
            <FontAwesomeIcon icon={faPaperPlane} />
            <text>
              texto da descrição
            </text>
          </div>
        </div>
    </div>
  )
}
