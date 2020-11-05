import './App.css';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';


var testTweet = {
  message: "HII FRIENDS WELCOME BACK TO MY CHANNEL",
  gravatar:'XYZ',
  author: {
    handle: "dop3madhu",
    name: "DOP I GAMING"
  },
  likes: 2,
  retweets: 2,
  timestamp: "2016-07-30 21:24:37",
};


class App extends React.Component {
  render() {
     return (
        <div>
          <Navbar tweet={testTweet}/>

        </div>
     );
  }
}

const Navbar=({tweet})=>{
  return(
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <Namewithhandle author={tweet.author}/>
        <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
      </div>
      <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
<LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
        {/* <Parent/> */}
        <div className="comments">
        <Comment author='somebody' message='a likable message' likes={1}/>
<Comment author='mr_unpopular' message='unlikable message'/>
<Comment author='mr_unpopular' message='another message' likes={0}/>
<Comment author='error_missing_message'/>
<Comment message='mystery author'/>
</div>
<div>
<IconButton></IconButton>
</div>
    </div>
  )
  
}

const IconButton=()=> {
  return (
    <button>
     <i class="target-icon"/>

    </button>
  );
}


const Avatar=({hash})=>{
  var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
      <img
        src={url}
        className="avatar"
        alt="avatar" />
    );  
  
}

//comment the particular channel
const Comment=({author, message, likes})=>{
  return (
    <div>
      <div className='author'>{author}</div>
      <div className='message'>{message}</div>
      <div className='likes'>
        {likes > 0 ? likes : 'No'} likes
      </div>
    </div>
  );

}


const Message=({text})=>{
  
    return (
      <div className="message">
        Hello Friends welcome to My YouTube Channel !!!..
      </div>
    );
  
}

const Namewithhandle=({author})=>{
  const { name, handle } = author;

    return (
      <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
      </span>
    );
}

const Time = ({time}) => {
  const timeString=moment(time).fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  )
};

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = ({count}) => (
  <span className="retweet-button">
  <i className="fa fa-retweet"/>
  {getRetweetCount(count)}
</span>

);

const LikeButton = ({count}) => (
  <span className="like-button">
  <i className="fa fa-heart"/>
  {count > 0 &&
    <span className="like-count">
      {count}
    </span>}
</span>

);

LikeButton.propTypes = {
  count: PropTypes.number
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

// <Hello name="Dave"/>
// const Hello = (props) => (
//   <div>Hello, {props.name}</div>
// );
//child and parent communcation in props
// const handleAction=(event)=>{
//   console.log('Child did:', event);

// }

// const Parent=()=>{
//   return (
//     <Child onAction={handleAction}/>
//   );
// }


// const Child=({onAction})=>{
// return(
//   <button onClick={onAction}>click</button>
// )
//  }

//COUNTING THE RETWEETS

const getRetweetCount=(count)=>{
  if(count>0){
    return (
      <span className="retweet-count">
        {count}
      </span>
    );

  }else{
    return null;
  }


  Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
  }

  function customValidator(props, propName, componentName) {
    // here, propName === "myCustomProp"
    if (props[propName].length !== 3) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Length is not 3.'
      );
    }
  }
  
  const CustomTest = ({ myCustomProp }) => (
    <span>{myCustomProp}</span>
  );
  CustomTest.propTypes = {
    myCustomProp: customValidator
  }
  

}

const git

export default App;
