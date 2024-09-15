import React from 'react';
import { AllBlogsData } from '../data/BlogsData';
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div>
      <div className='row mt-4'>
        {AllBlogsData.map((v, i) => (
          <div className='col-sm-4 p-2' key={i}>
            <div className='card p-2 text-center text-white bg-dark'>
              <div className='card-body'>
                <h6>{v.title}</h6>
                <p>{v.description}</p>

                <button className='btn btn-primary back-button'> <Link className='li text-white' to={`/blogs/${v.id}`}>More Detials </Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
