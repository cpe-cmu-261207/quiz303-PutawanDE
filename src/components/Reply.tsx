import { CommentType } from "../data/comments";
import Like from "./Like";

type ReplyProp = {
  reply: CommentType;
};

const Reply = (props: ReplyProp) => {
  const { username, userImagePath, commentText, likeNum } = props.reply;
  return (
    // reply
    /* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */
    <div>
      <div className="flex p-2 items-start space-x-2 pl-14">
        <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
        <div className="bg-gray-200 rounded-lg p-2">
          <p className="font-semibold">{username}</p>
          <p>{commentText}</p>
          {/* Like section */}
          <Like likeNum={likeNum} />
        </div>
      </div>
    </div>
  );
};

export default Reply;
