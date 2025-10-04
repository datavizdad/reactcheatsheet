import './Loading.css';

const Loading = ({ message = 'Loading...', size = 'medium' }) => {
  return (
    <div className={`loading loading-${size}`}>
      <div className="loading-spinner">
        <div className="loading-spinner-inner"></div>
      </div>
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default Loading;