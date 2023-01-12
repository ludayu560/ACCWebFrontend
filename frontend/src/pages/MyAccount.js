import './MyAccount.css'
import React, { useState } from 'react';
import AccountNav from './AccountNav';
import { useNavigate } from 'react-router';
import { FlexSection } from './globalStyles';

function MyAccount(props) {

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [age, setAge] = useState('')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        const resultError = null

        if (resultError !== null) {
            setError(resultError);
            return
        }

        setUsername('')
        setName('')
        setEmail('')
        setPhone('')
        setLocation('')
        setAge('')  

        console.log(username,name,email,phone,location,age);

        setError(null);
        setSuccess('Submitted Succesfully');

        setTimeout(() => {
            navigate(`/account-${props.name}`);
        });
    };

    return (
        <FlexSection>
            <AccountNav />
            <FlexSection fd='column'>
                <form onSubmit={handleSubmit}>
                <h1> Hello, {props.name} </h1> <br />

                <h3>Personal Details</h3>

                <input onChange={(e) => setUsername(e.target.value)} placeholder='Username*' type="text" />
                <input onChange={(e) => setName(e.target.value)} placeholder='Full Name*' type="text" />
                <input onChange={(e) => setEmail(e.target.value)} placeholder='Email Address*' type="text" />
                <input onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' type="text" />
                <input onChange={(e) => setLocation(e.target.value)} placeholder='Location*' type="text" />
                <input onChange={(e) => setAge(e.target.value)} placeholder='Age Range*' type="text" />

                <h3>Personality Traits</h3>

                <div>
                    <input type="checkbox" id="extroverted" name="extroverted"/>
                    <label for="extroverted">extroverted</label>
                </div>
                <div>
                    <input type="checkbox" id="introverted" name="introverted"/>
                    <label for="introverted">introverted</label>
                </div>
                <div>
                    <input type="checkbox" id="creative" name="creative"/>
                    <label for="creative">creative</label>
                </div>
                <div>
                    <input type="checkbox" id="feeling" name="feeling"/>
                    <label for="feeling">feeling</label>
                </div>
                <div>
                    <input type="checkbox" id="quiet" name="quiet"/>
                    <label for="quiet">quiet</label>
                </div>                
                <div>
                    <input type="checkbox" id="outgoing" name="outgoing"/>
                    <label for="outgoing">outgoing</label>
                </div>                
                <div>
                    <input type="checkbox" id="open" name="open"/>
                    <label for="open">open</label>
                </div>                
                <div>
                    <input type="checkbox" id="analytical" name="analytical"/>
                    <label for="analytical">analytical</label>
                </div>                
                <div>
                    <input type="checkbox" id="passive" name="passive"/>
                    <label for="passive">passive</label>
                </div>                
                <div>
                    <input type="checkbox" id="adventurous" name="adventurous"/>
                    <label for="adventurous">adventurous</label>
                </div>

                <h3>Interests</h3>

                <div>
                    <input type="checkbox" id="gardening" name="gardening"/>
                    <label for="gardening">gardening</label>
                </div>
                <div>
                    <input type="checkbox" id="hiking" name="hiking"/>
                    <label for="hiking">hiking</label>
                </div>
                <div>
                    <input type="checkbox" id="reading" name="reading"/>
                    <label for="reading">reading</label>
                </div>
                <div>
                    <input type="checkbox" id="puzzles" name="puzzles"/>
                    <label for="puzzles">puzzles</label>
                </div>
                <div>
                    <input type="checkbox" id="yoga" name="yoga"/>
                    <label for="yoga">yoga</label>
                </div>
                <div>
                    <input type="checkbox" id="cooking" name="cooking"/>
                    <label for="cooking">cooking</label>
                </div>
                <div>
                    <input type="checkbox" id="music" name="music"/>
                    <label for="music">music</label>
                </div>
                <div>
                    <input type="checkbox" id="art" name="art"/>
                    <label for="art">art</label>
                </div>
                <div>
                    <input type="checkbox" id="sports" name="sports"/>
                    <label for="sports">sports</label>
                </div>
                <div>
                    <input type="checkbox" id="cars" name="cars"/>
                    <label for="cars">cars</label>
                </div>

                <h3>Tell us about yourself</h3>

                <input placeholder='Provide a brief description about yourself...' type="text" /> <br />

                <button> Submit </button> 

                </form>

            </FlexSection>
        </FlexSection>
    );
  }
  
  export default MyAccount;
  