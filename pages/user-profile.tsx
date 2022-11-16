import React from 'react';
interface IProps {
	username: string;
}

const UserProfilePage: React.FC<IProps> = ({ username }) => {
	return <div>{<p>{`Hi ${username}`}</p>}</div>;
};

// eslint-disable-next-line @next/next/no-typos
export const getServerSideProps = async (context: { params: any; req: any; res: any }) => {
	const { params, req, res } = context;

	return {
		props: {
			username: 'The Tuan Nguyen',
		},
	};
};

export default UserProfilePage;
