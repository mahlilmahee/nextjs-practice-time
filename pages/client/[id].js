import React from 'react';

const mumtahina = ({post}) => {
    const {email,name,id}=post;
    return (
        <div>
            <h3> Wait here </h3>
            <h3>{email} </h3>
            <h4> {name} </h4>
            <h4>{id} </h4>
        </div>
    );
};

export default mumtahina;

// creating paths for different people means dynamic routes
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
  }
  
//   export default Post