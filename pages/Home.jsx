import { Button } from 'reactstrap';
import NavHeader from '../Components/NavHeader';
import Posts from '../Components/Posts';
import StoriesBar from '../Components/StoriesBar';
import HomeStyles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <NavHeader />
      {/* <div className={`${HomeStyles.container} container`}>
        <div className="row">
          <div className="col-auto"></div>
          <div className="col-7" style={{border: "1px solid black"}}> */}
            {/* <StoriesBar /> */}
            <Posts />
            <Posts />
            <Posts />
          {/* </div>
          <div className="col-4" style={{border: "1px solid red"}}>3rd</div>
        </div>
      </div> */}
    </>
  )
}

export default Home;
