import React from 'react';
import { useLocation } from 'react-router-dom';
import { AllBlogsData } from '../data/BlogsData';
import { Link } from "react-router-dom";

function BlogsDetails() {
  let location = useLocation();
  let currentId = location.pathname.split('/')[2]; 
  currentId = parseInt(currentId); 

  let currentData = AllBlogsData.find((v) => v.id === currentId); 

  return (
    <div>
      <h1 className='text-center mb-2'>Blog Details</h1>
      <div className='row'>
        <div className='col-4 offset-4'>
          <div className='card p-2 text-center text-white bg-dark border border-white'>
            <div className='card-body'>
              <h5>{currentData ? currentData.title : 'Blog not found'}</h5> 
              <span className='text-left font-weight-bold text-primary'>Description: </span> <br />
              <span>{currentData.description}</span> <br />
              
              <span className='font-weight-bold text-primary'>About Product: </span> <br />
              <span>{currentData.body}</span> <br />
              
              <span className='font-weight-bold text-primary'>Contact Us: </span> <br />
              <span>{currentData.phoneNumber}</span> <br />
              
              <button className='btn btn-primary mt-2 p-2 back-button'>
                <Link to='/blogs' className='text-decoration-none text-white'>
                  All Blogs
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsDetails;
