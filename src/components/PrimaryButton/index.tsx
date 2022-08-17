import { Button } from '@chakra-ui/react';
import { buttonProps } from 'constant';



const PrimaryButton = ({ colorScheme, size, color, backgroundColor, text }: buttonProps) => {
  return (
    <Button colorScheme={colorScheme} size={size} color={color} backgroundColor={backgroundColor}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
