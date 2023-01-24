function LikeButton () {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text,
  );
};

const domContainer = document.getElementById('root');
ReactDOM.render(
  React.createElement('div', null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton),
  ),
  domContainer
);

const domContainer1 = document.getElementById('root1');
const domContainer2 = document.getElementById('root2');
const domContainer3 = document.getElementById('root3');

ReactDOM.render(React.createElement(LikeButton), domContainer1);
ReactDOM.render(React.createElement(LikeButton), domContainer2);
ReactDOM.render(React.createElement(LikeButton), domContainer3);
