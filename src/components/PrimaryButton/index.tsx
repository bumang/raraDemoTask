import { Button } from '@chakra-ui/react';

interface buttonProps {
  colorScheme: string;
  size: string;
  color: string;
  backgroundColor: string;
  text: string;
}

const PrimaryButton = ({ colorScheme, size, color, backgroundColor, text }: buttonProps) => {
  return (
    <Button colorScheme={colorScheme} size={size} color={color} backgroundColor={backgroundColor}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
