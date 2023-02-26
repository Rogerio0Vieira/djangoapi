import GenericButtonStyled from './styles';

interface GenericButtonProps {
  name: string;
}

export const GenericButton: React.FC<GenericButtonProps> = ({name}) =>{

  return(
    <GenericButtonStyled color='black'>
      Teste
    </GenericButtonStyled>
  )
};