import Button from "@ui/button"
import Input from "@ui/input"
import Select from "@ui/select";

const TempComponent = () => {
  return (
    <div className="absolute flex flex-col gap-3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Input label="First name" />
      <Button styles={{ container: 'bg-han-blue' }} onClick={() => {}}>Add new patient</Button>
      <Select />
    </div>
  )
}

export default TempComponent;