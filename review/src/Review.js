import React,{useState} from 'react'
import './Review.css'

function Review() {
  const[data,setData] = useState([
    {
        id: 1,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'Maria ferguson',
        title: 'office manager',
        quote:
          'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
      },
      {
        id: 2,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'John doe',
        title: 'regular guy',
        quote:
          'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
      },
      {
        id: 3,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
        name: 'Peter smith',
        title: 'product designer',
        quote:
          'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
      },
      {
        id: 4,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'Susan andersen',
        title: 'the boss',
        quote:
          'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
      },
    
  ]);
  const[index,setIndex]=useState(0)
  const handlenext=()=>{
    if(index===data.length-1){
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }
     
  }
  const handleprevious=()=>{
    if(index===0){
      setIndex(3)
    }
    else{
      setIndex(index-1)
    }
  }
 
  return (
    <div className='overall'>
        <div className='body'>/ Reviews</div>
       
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <div class="img-div"><img src={data[index].image}class="d-block imgs" alt="img"/></div>
      <div class='name'>{data[index].name}</div>
      <div className='job'>{data[index].title}</div>
      <div className='text'>{data[index].quote}</div>
      
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <div class="img-div"><img src={data[index+1].image}class="d-block imgs" alt="img"/></div>
      <div class='name'>{data[index+1].name}</div>
      <div className='job'>{data[index+1].title}</div>
      <div className='text'>{data[index+1].quote}</div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <div class="img-div"><img src={data[index+2].image}class="d-block imgs" alt="img"/></div>
      <div className='name'>{data[index+2].name}</div>
      <div className='job'>{data[index+2].title}</div>
      <div className='text'>{data[index+2].quote}</div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <div class="img-div"><img src={data[index+3].image}class="d-block imgs" alt="img"/></div>
      <div class='name'>{data[index+3].name}</div>
      <div className='job'>{data[index+3].title}</div>
      <div className='text'>{data[index+3].quote}</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
</div>

          
          
          
           </div>
        

  )
}

export default Review