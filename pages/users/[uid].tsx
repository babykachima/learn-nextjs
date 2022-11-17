import React from 'react';

interface IProps {
	id: string;
}

const UserDetailPage: React.FC<IProps> = ({ id }) => {
	return (
		<div>
			<p>{`UserID: ${id}`}</p>
		</div>
	);
};

export const getServerSideProps = async (context: { params: any }) => {
	const { params } = context;
	const userId = params.uid;

	return {
		props: {
			id: `userID ${userId}`,
		},
	};
};

export default UserDetailPage;
