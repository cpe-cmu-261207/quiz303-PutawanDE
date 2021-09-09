import { CommentType } from "../data/comments";
import Like from "./Like";
import Reply from "./Reply";

type CommentProp = {
  comment: CommentType;
};

const Comment = (props: CommentProp) => {
  const { username, userImagePath, commentText, likeNum, replies } =
    props.comment;

  return (
    // normal comment
    <div className="">
      <div className="flex p-2 items-start space-x-2">
        <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
        <div className="bg-gray-200 rounded-lg p-2">
          <p className="font-semibold">{username}</p>
          <p>{commentText}</p>
          {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
          <Like likeNum={likeNum} />
        </div>
      </div>

      {/* replies */}
      {replies.map((r) => (
        <Reply reply={r} />
      ))}
    </div>
  );
};

export default Comment;
