const touristActivities = [
    {
      // String
      name: 'Hiking Adventure',
      description: 'Explore scenic trails and enjoy the beauty of nature.',
    },
    {
      // Number
      id: 1,
      price: 49.99,
      maxParticipants: 20,
    },
    {
      // Boolean
      isAvailable: true,
      requiresBooking: false,
    },
    {
      // Object
      location: {
        city: 'Mountain Town',
        country: 'Adventureland',
      },
      guide: {
        name: 'John Doe',
        age: 35,
      },
    },
    {
      // Array
      photos: ['hiking1.jpg', 'hiking2.jpg', 'hiking3.jpg'],
      ratings: [4.5, 4.7, 4.2, 4.8],
      features: ['Scenic Views', 'Nature Photography', 'Picnic Spot'],
    },
    {
      // Null
      specialOffer: null,
    },
    {
      // Undefined
      discountCode: undefined,
    },
  ];
  
  console.log(touristActivities);
  