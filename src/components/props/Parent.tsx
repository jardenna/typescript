import { ChildAsFn } from './Child';

function Parent() {
   return (
      <div>
         <ChildAsFn name={'Helle'} onClick={() => console.log('Clicked')} />
      </div>
   );
}

export default Parent;