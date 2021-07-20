import Video from '../vids/1.mp4'

export const Vid1=function(){
  return(
    <div className='vidContainer'>
      <video 
        id='v2'
        className='video'
        autoPlay 
        muted 
        loop src={Video} 
        type='video/mp4'
      />
    </div>
  );
};