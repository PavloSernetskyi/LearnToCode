const touristActivities = [
    {
      id: 1,
      name: 'Hiking Adventure',
      description: 'Explore scenic trails and enjoy the beauty of nature.',
      location: {
        city: 'Mountain Town',
        country: 'Adventureland',
      },
      date: new Date('2023-06-15'),
      durationInHours: 5.5,
      price: 49.99,
      maxParticipants: 20,
      isAvailable: true,
      guide: {
        name: 'John Doe',
        age: 35,
        isCertified: true,
      },
      photos: ['hiking1.jpg', 'hiking2.jpg', 'hiking3.jpg'],
      ratings: [4.5, 4.7, 4.2, 4.8],
      features: ['Scenic Views', 'Nature Photography', 'Picnic Spot'],
    },
    {
      id: 2,
      name: 'City Bus Tour',
      description: 'Discover the city’s landmarks on a guided bus tour.',
      location: {
        city: 'Metropolis',
        country: 'Touristan',
      },
      date: new Date('2023-07-20'),
      durationInHours: 3.5,
      price: 29.99,
      maxParticipants: 30,
      isAvailable: true,
      guide: {
        name: 'Alice Smith',
        age: 28,
        isCertified: true,
      },
      photos: ['citytour1.jpg', 'citytour2.jpg', 'citytour3.jpg'],
      ratings: [4.0, 4.2, 4.5, 4.3],
      features: ['Historical Sites', 'Cityscape Views', 'Audio Commentary'],
    },
    {
      id: 3,
      name: 'Beach Sunset Yoga',
      description: 'Relax and rejuvenate with a yoga session by the beach.',
      location: {
        city: 'Seaside Village',
        country: 'Relaxia',
      },
      date: new Date('2023-08-10'),
      durationInHours: 1.5,
      price: 19.99,
      maxParticipants: 15,
      isAvailable: true,
      guide: {
        name: 'Mia Johnson',
        age: 30,
        isCertified: true,
      },
      photos: ['yoga1.jpg', 'yoga2.jpg', 'yoga3.jpg'],
      ratings: [4.8, 4.9, 4.7, 4.9],
      features: ['Beach Setting', 'Meditation', 'Yoga Mats Provided'],
    },
  ];
  
  console.log(touristActivities);
  