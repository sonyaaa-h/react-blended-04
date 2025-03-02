import GridItem from '../GridItem/GridItem';
import Text from '../Text/Text';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

const Todo = () => {
  return (
    <GridItem>
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # 1
      </Text>
  
      <Text>Text todo 1</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  </GridItem>
  );
};

export default Todo;
