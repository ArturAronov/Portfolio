import Video from '../vids/2.mp4'

export const Vid2=function(){
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