export const DUMMY_DATA = [
	{
		id: 1,
		title: 'Ahmed Nishaath',
		description: 'Browse premium related images on iStock | Save 20% with code UNSPLASH20',
		location: 'Fake Location',
		date: '2022-5-12',
		image:
			'https://images.unsplash.com/photo-1565802525957-d818c100d6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80',
		isFeatured: true,
	},
	{
		id: 2,
		title: 'Amelia Wahyuningtias',
		description: 'Browse premium related images on iStock | Save 20% with code UNSPLASH20',
		location: 'Fake Location',
		date: '2022-5-12',
		image:
			'https://images.unsplash.com/photo-1617312089907-b11f18442824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
		isFeatured: false,
	},
	{
		id: 3,
		title: 'Jackson Simmer',
		description:
			'Jos was finally willing to let me use him as a subject. Being my younger brother can be hard sometimes. Love how this one turned out :) Thanks, Nonie',
		location: 'Fake Location',
		date: '2022-5-12',
		image:
			'https://images.unsplash.com/photo-1584483456442-b0bfd23f20fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
		isFeatured: false,
	},
];

export const getData = () => {
	return DUMMY_DATA;
};

export const getDataById = (id: number) => {
	return DUMMY_DATA.find((event) => event.id === id);
};
