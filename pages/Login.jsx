import { Form, FormGroup, Input, Button } from 'reactstrap';
import loginStyles from './../styles/Login.module.css';

const Login = () => {
  return (
    <div className={loginStyles.container}>
      <div className="row">
        <div className="col-sm-6">
          <img src="login/img/Phone.png" id={loginStyles.phone_img} alt="" />
        </div>
        <div className="col-sm-6">
          <div className={`${loginStyles.right_column} text-center`}>
            <img src="label.png" className={loginStyles.instagram_logo} alt="" />
            {/* <p className={loginStyles.text_for_member}>Sign up to see photos and videos from your friends.</p> */}

            <Form>
              <FormGroup className={loginStyles.FormGroup}>
                <Input className={loginStyles.FormControl} type="text" name='' placeholder='Phone Number, Username or Email' />
              </FormGroup>
              
              <FormGroup className={loginStyles.FormGroup}>
                <Input className={loginStyles.FormControl} type="password" name='' placeholder='Password' />
              </FormGroup>
              <Button id={loginStyles.login_btn} color='primary' block>Log in</Button>
            </Form>

            <p className={loginStyles.or}>OR</p>

            <div className=''>
              <img id={loginStyles.fb_icon} src="login/img/fb_icon.png" alt="" />
              <span id={loginStyles.login_with_fb}>Login with Facebook</span>
            </div>

          </div>

          <div className={loginStyles.right_column_below}>
            <p id={loginStyles.signup_para}>{`Don't have an account? `}<span id={loginStyles.signup_btn}>Sign up</span></p>
          </div>
          
          <p className={loginStyles.apps_text}>Get the app.</p>

          <div className={loginStyles.apps} >
            <img src="login/img/google_play.png" />
            <img src="login/img/Microsoft.png"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;
