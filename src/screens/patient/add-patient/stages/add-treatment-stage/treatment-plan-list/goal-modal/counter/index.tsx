import Button from '@components/ui/button';

const Counter = () => {
  return (
    <div className="space-y-[8px]">
      <p className="uppercase fs14Medium">Frequency</p>

      <div className='flex gap-[8px] justify-center'>
        <Button styles={{ container: 'bg-cultured-secondary text-black p-[10px] w-[40px] fs20RobotoRegular' }} onClick={() => {}}>-</Button>
        <div className="text-center rounded-[4px] p-[10px] w-[60px] border border-sonic-silver">
          <input className="max-w-[60px] w-[24px] fs20RobotoRegular" />
        </div>
        <Button styles={{ container: 'bg-cultured-secondary text-black p-[10px] w-[40px] fs20RobotoRegular' }} onClick={() => {}}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
