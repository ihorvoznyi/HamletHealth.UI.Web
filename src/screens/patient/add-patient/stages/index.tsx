import ctl from '@netlify/classnames-template-literals';
import { cn } from '@utils/style.util';

interface PropsType {
  state: '1' | '2' | '3';
}

/**
 * Кожен степ має 3 стани:
 *  1. Активний степ (синій залитий)
 *  2. Незаповнений (сірий не залитий)
 *  3. Заповнений (зелений залитий)
 * 
 * Якщо step 1 пройдений, а 2 ні, то малюю між ними напів зелену лінію
 * Якщо step 1 & 2 пройдені - малюю dashed green line
 * Якщо пройдений тільки степ 2 - малюю напів зелену лінію з 2 до 3 степу
 */

const classes = {
  paragraph: cn(ctl('uppercase'), ),
  line: cn(ctl('')),
};

const StageBullet = ({ isActive }: { isActive: boolean }) => {
  return <div />;
};

const Stage = () => {
  return (
    <div className="">
      <div>
        <StageBullet isActive={true} />
        <p className={classes.paragraph}>add Patient&rsquo;s info</p>
      </div>

      <div className="" /> {/* Stage 1 to 2 */}
      
      <div>
        <p className={classes.paragraph}>treatment plan</p>
      </div>

      <div /> {/* Stage 2 to 3 */}

      <div>
        <p className={classes.paragraph}>add Supporters</p>
      </div>
    </div>
  );
};

export default Stage;