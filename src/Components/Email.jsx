import React, { useState } from 'react';
import logo from '../Images/logo.png';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';

export default function Email() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleEmail = (e) => {
        e.preventDefault();

        if (email.endsWith('@ez.works')) {
            setError('Emails ending with "@ez.works" are not allowed');
            return;
        }

        // Clear any previous error and success messages
        setError('');
        setSuccessMessage('');

        // Send a POST request to the API
        fetch('http://3.228.97.110:9000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    console.log(res.status);
                    setSuccessMessage('Form Submitted');
                } else if (res.status === 422) {
                    console.log(res.status);
                    setError('Email format is incorrect');
                }
            })
            .catch((err) => {
                console.error(err);
                setError('An error occurred while submitting the form');
            });
    };

    return (
        <div className='container'>
            <div className='left'>
                <div className='ezlogo'>
                    <img src={logo} alt='img' />
                </div>
                <div className='sub_heading'>
                    <span>Suite Of Business Support Services</span>
                </div>
                <div className='description'>
                    <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</span>
                </div>
                <div className='mail1'>
                    <div className='email'>
                        <form onSubmit={handleEmail}>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                required
                            />
                            <input type="submit" value="Contact Me" className='button' />
                        </form>
                        {error && <p className="error">{error}</p>}
                        {successMessage && <p className="success">{successMessage}</p>}
                    </div>
                </div>

            </div>

            {/* right */}
            <div className='right'>
                <div className='cards'>

                    <div className='card'>
                        <div className='part1'>
                            <img src={img1} alt='img' className='icon' />
                            <p className='icon_heading'>Presentation Design</p>
                        </div>
                        <div className='part2'>
                            <span>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='part1'>
                            <img src={img2} alt='img' className='icon' />
                            <p className='icon_heading'>Audio - Visual Production</p>
                        </div>
                        <div className='part2'>
                            <span>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='part1'>
                            <img src={img3} alt='img' className='icon' />
                            <p className='icon_heading'>Translation Services</p>
                        </div>
                        <div className='part2'>
                            <span>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='part1'>
                            <img src={img4} alt='img' className='icon' />
                            <p className='icon_heading'>Graphic Design</p>
                        </div>
                        <div className='part2'>
                            <span>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='part1'>
                            <img src={img5} alt='img' className='icon' />
                            <p className='icon_heading'>Research & Analytics</p>
                        </div>
                        <div className='part2'>
                            <span>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='part1'>
                            <img src={img6} alt='img' className='icon' />
                            <p className='icon_heading'>Data Processing</p>
                        </div>
                        <div className='part2'>
                            <span>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

