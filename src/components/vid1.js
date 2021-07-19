import Video from '../vids/1.mp4';

export const Vid1=function(){
  return(
    <div className='vidContainer'>
      <video 
        id='v1'
        className='video'
        autoPlay 
        muted 
        loop src={Video} 
        type='video/mp4'
      />
    </div>
  );
};