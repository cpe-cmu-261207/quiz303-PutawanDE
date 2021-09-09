type likeProp = {
  likeNum: number;
};

const Like = ({ likeNum }: likeProp) => {
  return (
    <>
      {likeNum > 0 ? (
        <div className="flex items-center">
          <img className="w-4 h-4 mr-1" src="/like.svg"></img>
          <p className="text-gray-500">{likeNum} คน</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Like;
