interface Props {
   name: string;
   onClick: () => void;
}

export function Child({ name, onClick }: Props) {
   return (
      <div>
         {name}
         <button onClick={onClick}>Click</button>
      </div>
   )
}

export const ChildAsFn: React.FC<Props> = ({ name, onClick }) => {
   return (
      <div>
         {name}
         <button onClick={onClick}>Click</button>
      </div>
   );
}

