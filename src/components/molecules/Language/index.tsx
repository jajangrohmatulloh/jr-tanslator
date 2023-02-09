import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function Language() {
  return (
    <Box className="my-4 flex items-center justify-evenly text-white">
      <Button className="w-32 bg-surface py-2 px-4 text-white hover:bg-surface">
        English
      </Button>
      <Button className="bg-surface text-white hover:bg-surface">
        <CompareArrowsIcon className="text-white" />
      </Button>
      <Button className="w-32 bg-surface py-2 px-4 text-white hover:bg-surface">
        Indonesia
      </Button>
    </Box>
  );
}

export default Language;
