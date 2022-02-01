import React from 'react';
import Link from 'next/link'
const index = ({posts}) => {
    return (
        <div>
            <h3> Hello It is client side here {posts.length} </h3>
            {
                posts.map(data=>{ 
                
                <h3 key={data.key} >
                     {data.name} 
                       <Link href={`client/${data.id}`}>
                     <a>Explore me </a>
                      </Link> 
              
              </h3> })
            }
        </div>
    );
};

export default index;

export async function getStaticProps(){

    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const posts =await res.json()
    return {
        props:{posts}
    } 
}