import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShapeApp.css';

const Title = ({ message, score, shapeAudio, playAudio, correct, correctShape }) => {
    return (
        <div>
        <div className='row shape-header'>
            <div className='col-lg-1'>
                <div className='hvr-icon-back back-button-wrapper'>
                    <Link to='/'>
                        {/* <i className='fas fa-arrow-circle-left hvr-icon back-button'></i> */}
                        <div className="back-arrow back-button"></div>
                    </Link>
                </div>
            </div>
            <div className='col-lg-6'>
                <h1 className={correct}>{message}</h1>
            </div>
            <div className='col-lg-3'>
                <button
                    onClick={() => playAudio(shapeAudio)}
                    /* onEnded={() => } */
                    className={`${correct === 'shake' ? 'correct' : ''}`}
                >
                    <img
                        src='https://www.searchpng.com/wp-content/uploads/2019/02/Audio-Button-PNG-715x735.png'
                        alt='play audio'
                        className={`audio-btn2 ${
                            correct === 'shake' ? 'correct' : ''
                        }`}
                    />
                </button>
            </div>
            <div className='col-lg-2'>
                <h1 className={correct === 'correct' ? 'correct' : ''}>
                    {score}/10
                </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"><h1 className={correct}>{correctShape}</h1></div>
            <div className="col-md-4"></div>
        </div>

        </div>
        
    );
};

Title.propTypes = {
    message: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
};

export default Title;
