import styled from 'styled-components'

const Image = styled.div`
   width: 100%;
   height: 100%;
   background-image: url(${props => props.url});
   background-size: cover;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   opacity: ${(props) => props.backgroundopacity};
`;
export default function BackgroundImage({url, backgroundopacity}){
   return(
      <Image url={url} backgroundopacity={backgroundopacity}></Image>
   )
}