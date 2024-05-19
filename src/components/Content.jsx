function Content() {
    return (
      <div className='w-full flex my-20 px-20 relative flex-col 2xl:flex-row'> 
        <div className='w-5/12'>      
          <img 
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
            alt="Nature Image" 
            className='absolute w-1/2 mt-20'
          />
        </div>
        <div className='w-7/12 h-[90vh] bg-gray-200 flex flex-col justify-center items-start pl-16 md:pl-24 lg:pl-32'>
          <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
          <p className='text-gray-500 w-[90%] mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
          <button
            type="button"
            className="rounded-sm bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          > 
            Get In Touch
          </button>
        </div>
      </div>
    )
  }
  
  export default Content
  