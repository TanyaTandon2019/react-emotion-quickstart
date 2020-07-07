import React, { useEffect,useState }  from 'react';
import { css } from '@emotion/core'
import Tracker from './tracker/tracker'

function App() {
  const target = React.createRef();

  /*tracker logic*/
  const [readingProgress, setReadingProgress] = useState(0);
		const scrollListener = () => {
			console.log(target);
			if (!target.current) {
				return;
			}
	
			const element         = target.current;
			const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
			const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	
			if (windowScrollTop === 0) {
				return setReadingProgress(0);
			}
	
			if (windowScrollTop > totalHeight) {
				return setReadingProgress(100);
			}
	
			setReadingProgress((windowScrollTop / totalHeight) * 100);
		};
		
		useEffect(() => {
			window.addEventListener("scroll", scrollListener);
			return () => window.removeEventListener("scroll", scrollListener);
    });
    /*tracker logic ends*/

  return (
    <div css={
      css`
      text-align: center;
      display: flex;
      flex-direction: column;
    `}>
      <Tracker backgroundColor={'#D3D3D3'} trackerColor={'#000000'} thickness={10} width={'100%'} readingProgress={readingProgress}/>
      <div ref={target} css={
            css`
            background: '#ffffff';
            padding: 5%;
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Econ Sans';
            width: 10%;
            overflow-x: hidden;
            position:relative;
            border: none;
        `}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eget tellus ultricies mattis at vitae nunc. Praesent vitae suscipit urna. Vivamus augue neque, semper non gravida sit amet, condimentum a erat. In scelerisque, risus a volutpat egestas, turpis ante tincidunt sem, ac euismod tellus diam ac nisl. Nulla scelerisque velit hendrerit dui faucibus euismod. Etiam sem ligula, fringilla non elit at, dignissim commodo metus. Maecenas quis velit gravida, sollicitudin ipsum et, luctus elit. Nunc dignissim finibus efficitur.

Etiam nibh sem, dignissim ac sapien id, blandit commodo libero. Vestibulum malesuada suscipit dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel lacus a turpis egestas vehicula et id leo. Phasellus neque quam, vestibulum eget urna sit amet, maximus ullamcorper mi. Morbi rhoncus ante nec lobortis sodales. Fusce suscipit ut augue sit amet consectetur. Aliquam elit orci, sagittis et condimentum et, vehicula ut lacus. Mauris ut egestas est. Suspendisse molestie tincidunt libero eu auctor. In blandit sapien ligula. Mauris hendrerit eros et vehicula laoreet. In non nulla porttitor, mollis quam in, hendrerit ante. Duis bibendum faucibus neque, a interdum nisl mattis vel.

Suspendisse efficitur sapien ut augue pulvinar euismod. Suspendisse sem turpis, interdum sed risus a, sollicitudin condimentum sapien. Quisque pulvinar luctus leo non aliquet. Vivamus vulputate diam dui, id cursus ipsum maximus nec. Morbi tristique eros quis nisi mattis, in ultricies enim volutpat. Sed finibus leo et quam consequat consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer convallis tortor nec risus gravida, sit amet mattis ante lacinia. Curabitur in egestas nisl. Donec scelerisque gravida enim, eu molestie lorem sollicitudin eget. Maecenas aliquet nec nibh in ultricies. Nullam blandit, ante ac imperdiet mattis, lacus leo posuere dui, vitae hendrerit ante diam nec massa. Donec quis ligula ex.

Suspendisse malesuada nunc nisi, pretium consectetur erat lobortis ac. Proin eu accumsan risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin a feugiat neque. Donec interdum dolor eu odio eleifend, in maximus tortor vestibulum. Nullam ut orci in purus commodo porta. Mauris ut ante tortor. Nunc vitae lobortis odio, eu finibus quam. Nullam a ipsum purus. Mauris congue ligula id elementum sodales. In lacinia lacinia turpis ac pellentesque. Duis ut felis odio. Nam suscipit enim diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla purus eros, suscipit vel tincidunt non, laoreet nec est. Sed vel maximus quam, id facilisis massa.

Curabitur consequat dolor in lectus auctor, ut semper lorem vehicula. Etiam feugiat malesuada sem ac porta. Ut sed finibus elit. Morbi aliquam dui massa, et aliquam ipsum aliquam fringilla. Ut lectus arcu, faucibus pulvinar tincidunt vel, blandit vel purus. Duis id fringilla nulla. Sed risus leo, feugiat vitae massa a, consectetur laoreet sapien.
        </div>
    </div>
  );
}

export default App;
