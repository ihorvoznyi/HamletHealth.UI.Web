import { cn } from "@utils/style.util";
import { containerStyle } from "./index.tailwind";

const Select = () => {
  const classes = {
    container: cn(containerStyle),
  };

  return (
    <div className={classes.container}>
      hello
    </div>
  );
}

export default Select;
