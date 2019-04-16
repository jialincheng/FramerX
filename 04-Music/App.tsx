import { Data, Override, Point, Frame, Animatable, transform } from "framer";

const names = [
    {
      artist: "Tanya Cuevas",
      title: "Early Morning"
    },
    {
      artist: "Joy Decker",
      title: "Lonely Blues"
    },
    {
      artist: "Nannie Andrew",
      title: "Travel Forever"
    },
    {
      artist: "Elaine Holloway",
      title: "Taking Train"
    },
    
  ];
  
const data = Data({ 
    title: names[0].title, artist: names[0].artist,
    pageIndex: 0
    });
  

    export const Album: Override = () => {
    return {
        onChangePage(event:number) {
        data.pageIndex = event;
        const { artist, title } = names[event];
        data.artist = artist;
        data.title = title;
        
        }
    }
}
  
  export const SwapTitle: Override = () => {
    return {
      text: data.title
    };
  };
  
  export const SwapArtist: Override = () => {
    return {
      text: data.artist
    };
  };


export const Blur: Override = () => {
  return {
      style: {filter: "blur(50px)", background: "rgba(0,0,0,0.4)"}
  }
}



export const Background: Override = () => {
  return {
      currentPage: data.pageIndex,
      style: {pointerEvents: "none"}
  }
}