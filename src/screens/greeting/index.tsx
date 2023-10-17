import { useNavigate } from 'react-router-dom';
import Button from "@ui/button";
import { btnStyle, containerStyle, headerStyle, listStyle, listWrapperStyle, mainStyle, titleStyle } from "./index.tailwind";

const GreetingScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className={containerStyle}>
      <header className={headerStyle}>
        WEB APP PROTOTYPES
      </header>

      <main className={mainStyle}>
        <h1 className={titleStyle}>
          Test a Hamlett Health provider&rsquo;s web app
        </h1>

        <div className={listWrapperStyle}>
          The goals are:
          <ul className={listStyle}>
            <li>To create a provider&rsquo;s account</li>
            <li>To add a new patient (Amanda Hug)</li>
            <li>To add 4 activities to her daily routine</li>
            <li>To track her progress</li>
          </ul>
          To fill in inputs and dropdowns, click on it.
        </div>

        <Button styles={{ container: btnStyle }} onClick={handleClick}>Start Testing</Button>
      </main>
    </div>
  )
}

export default GreetingScreen;