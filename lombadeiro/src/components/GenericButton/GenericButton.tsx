import GenericButtonStyled from './styles';

interface GenericButtonProps {
  name: string;
  color: string;
}

export const GenericButton: React.FC<GenericButtonProps> = ({name, color}) =>{

  return(
    <GenericButtonStyled color={color}>
      {name}
    </GenericButtonStyled>
  )
};