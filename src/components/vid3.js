import Video from '../vids/3.mp4'

export const Vid3=function(){
  return(
    <div  className='vidContainer'>
      <video 
        id='v3'
        className='video'
        autoPlay 
        muted 
        loop src={Video} 
        type='video/mp4'
      />
    </div>
  );
};