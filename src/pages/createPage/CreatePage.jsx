import React, { useState } from 'react'
import "./createpage.css";

const CreatePage = () => {

  const [pageData, setPageData] = useState({
    pageName: '',
    category: '',
    bio: '',
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setPageData({
      ...pageData, 
      [name]: value,
    });
  };

  const handleCreatePage = async () => {
    // let token = localStorage.getItem('sign').sign.token;
    
    try {
      const localStorageData = JSON.parse(localStorage.getItem('sign'));
      const token  = localStorageData?.sign?.token;
      console.log("token", token);

      if (!token) {
        // Handle the case where the token is not available
        console.error('Token not found in local storage');
        return;
      }
  
      const response = await fetch('https://academics.newtonschool.co/api/v1/facebook/channel/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'projectID': 'f104bi07c490',
        },
        body: JSON.stringify({
          title: pageData.pageName,
          description: pageData.bio,
          images: '', // You may need to handle images separately

          
        }),
        
      });
      
      // Handle the response, e.g., show a success message
      console.log('Page created successfully:', response);
    } catch (error) {
      console.error('Error creating page:', error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <>
   
    <div className='pageContainer'>
    <h1>Create a Page</h1>
    <h2>Your Page is where people go to learn more about you. Make sure that yours has all of the information they may need.</h2>
    <div>
        <input type="text" placeholder="Page Name(required)" name="pageName" value={pageData.pageName} onChange={handleInputChange} required />
      </div>
      <p>Use the name of your business, brand or organisation, or a name that helps explain your Page. Learn more</p>
      <div>
        <input type="text" placeholder="Category(required)" name="category" value={pageData.category} onChange={handleInputChange} required />
      </div>
      <p>Enter a category that best describes you.</p>
      <div>
      <div>
        <textarea placeholder="Bio (optional)" name="bio" value={pageData.bio} onChange={handleInputChange} cols="30" rows="10"></textarea>
      </div>
      </div>
      <p>Tell people a little about what you do.</p>

      <button type="submit" onClick={handleCreatePage}>Create Page</button>
      <p>By creating a Page, you agree to the Pages, Groups and Events Policies</p>
    </div>
    </>
  )
}

export default CreatePage