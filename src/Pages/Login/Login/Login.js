import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Login = () => {
    const [isSigin, setisSigin] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { signInGoogle,auth } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from?.pathname || '/home';
    
    const handleGoogleLogin = () => {
        signInGoogle()
        
        .then(result => {
            history.push(redirect_uri);
            console.log(result.user.displayName);
            const id = result.user.uid;
            const name = result.user.displayName;
            const email = result.user.email ;
            const newUser = {id, name, email};
            
            fetch('https://bloodcurdling-chupacabra-21156.herokuapp.com//users',{
                method:"POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res=> res.json())
            .catch(err => console.log(err))
        })
        
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
  });
}
    
    const handleLogin= (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    
    
   
    return (
        <div>
            <div className='mx-4 mt-4'>
            <h2>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=> setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Group>
                {
                    isSigin &&
                <Button onClick={handleLogin} variant="primary" type="submit">
                    Sign In
                </Button>
                }
                <Button onClick={() => setisSigin(!isSigin)} variant="text"> Please {isSigin ? 'Sign up' : 'Sign in'}</Button>
            </Form>
            </div>
            <div className='buttons mt-3'>
                {
                    !isSigin &&
                <Button onClick={handleRegistration}>Sign up</Button>
                }
                <Button onClick={handleGoogleLogin}>Google SignIn</Button>
            </div> 
            
        </div>
    );
};

export default Login;
