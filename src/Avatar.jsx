import React, {useState} from 'react';

const Avatar = ({image, firstName, lastName}) => {


        const [count, setCount] = useState(0);

        const handleClick = () => {
            setCount(count + 1)
        }

    return (
        <div>
            <img src={image} alt={firstName} width="200"/>
            <p>{firstName} {lastName}</p>
            <img src="/donut.png" width = "50"/>
            <span>{count}</span>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Avatar;

//on pourrait mettre props en paramètres et écrire props.image, props.firstName ici, et App ne changerait pas du tout. Ici on a une version déstructurée, c'est tout.

