interface CardProps{
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({children, className}) => {
    return ( 
        <div className="bg-white w-screen md:w-4/5 rounded-3xl pt-20 drop-shadow-2xl mb-20">
            {children}
        </div>
     );
}
 
export default Card;