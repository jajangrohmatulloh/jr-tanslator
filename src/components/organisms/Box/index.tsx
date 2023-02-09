import BoxUI from '@mui/material/Box';

interface Input {
  isInput: boolean;
}

function Box(props: Input) {
  const { isInput } = props;
  return (
    <BoxUI className=" h-60 w-full rounded-xl bg-surface p-4">
      <textarea
        className="h-full w-full resize-none text-2xl text-white placeholder:text-placeholder focus-within:outline-none"
        placeholder={isInput ? 'Type Here' : ''}
        disabled={isInput ? false : true}
      />
    </BoxUI>
  );
}

export default Box;
