import classNames from 'classnames';

const style = require("./Card.scss");
const cx = classNames.bind(style);

interface ICardPropTypes {
  message: string,
  content: string,
  percent: string,
}

const Card = ({message, content, percent}: ICardPropTypes):JSX.Element => {
  return (
    <div className={cx('Card')}>
      <div className={cx('Card-Title')}>{message}</div>
      <div className={cx('Card-Content')}>{content}</div>      
      <div className={cx('Card-Percent')}>{percent}</div>
    </div>
  );
}

export default Card;