function Cards() {
    const cards = [
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
        user: {
          name: "Gladis Lennon",
          role: "Head of SEO",
          imageUrl: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
        }
      },
      // Add more cards here if needed
    ];
  
    return (
      <div className='container mx-auto flex flex-wrap gap-8 my-20'>
        {cards.map((card, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
            <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
              <p>{card.desc}</p>
            </div>
            <div className='flex mt-4 items-center'>
              <img
                src={card.user.imageUrl}
                alt={card.user.name}
                className='w-12 h-12 object-cover rounded-full'
              />
              <div className='ml-4'>
                <h1 className='font-bold'>{card.user.name}</h1>
                <p>{card.user.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Cards;
  