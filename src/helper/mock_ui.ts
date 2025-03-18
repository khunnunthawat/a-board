interface PostInfoType {
  id: number;
  author: string;
  avatar: string;
  category: string;
  title: string;
  description: string;
  comments: number;
}

export const getPosts: PostInfoType[] = [
  {
    id: 1,
    author: 'Wittawat',
    avatar: '/avatar.png',
    category: 'History',
    title: 'The Beginning of the End of the World',
    description:
      'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future...',
    comments: 32,
  },
  {
    id: 2,
    author: 'Zach',
    avatar: '/avatar.png',
    category: 'History',
    title: 'The Big Short War',
    description:
      'Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate...',
    comments: 0,
  },
  {
    id: 3,
    author: 'Nicholas',
    avatar: '/avatar.png',
    category: 'History',
    title: 'A Night to Remember',
    description:
      'A thrilling account of the unsinkable Titanic and the tragic night it met its fate...',
    comments: 10,
  },
  {
    id: 4,
    author: 'Carl',
    avatar: '/avatar.png',
    category: 'History',
    title: 'What Makes a Man Betray His Country?',
    description:
      'The life of Adolf Tolkachev, Soviet dissident and CIA spy.  Excerpted from The Billion Dollar Spy: A True Story of Cold War Espionage and Betrayal.',
    comments: 1,
  },
];

export const detailPost = {
  id: 1,
  author: 'Zach',
  avatar: '/avatar.png',
  category: 'History',
  title: 'The Big Short War',
  content:
    'Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”',
  comments: 32,
  timestamp: '5mo. ago',
  isOnline: true,
};

export const detailComments = [
  {
    id: 1,
    user: 'Wittawat98',
    avatar: '/avatar.png',
    time: '12h ago',
    text: 'Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.',
  },
  {
    id: 2,
    user: 'Hawaii51',
    avatar: '/avatar.png',
    time: '1mo. ago',
    text: 'Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.',
  },
];
