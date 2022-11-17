import React, { useEffect, useState } from 'react';
import { User } from '../../src/type/interface';
import Image from 'next/image';
import useSWR from 'swr';

interface IProps {
	users: User[];
}
const ListUserPage: React.FC<IProps> = ({ users }) => {
	const { data, error } = useSWR('https://reqres.in/api/users', (url) =>
		fetch(url).then((res) => res.json())
	);
	const [useData, setUserData] = useState<Array<User>>(users);

	useEffect(() => {
		setUserData(data?.data);
	}, [data?.data]);

	if (error) {
		return (
			<div>
				<p>Faild to load</p>
			</div>
		);
	}
	if (!data) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div>
			{useData?.map((item) => {
				return (
					<div key={item.id}>
						<Image
							src={item.avatar}
							alt={item.first_name}
							width={100}
							height={100}
							priority={true}
						/>
						<p>{item.first_name}</p>
						<p>{item.last_name}</p>
					</div>
				);
			})}
		</div>
	);
};

export const getStaticProps = async () => {
	const fetchData = await fetch('https://reqres.in/api/users');
	const userResponse = await fetchData.json();
	// don't need revalidate because the SWR will automatic revalidate data when have change
	return {
		props: {
			users: userResponse.data,
		},
	};
};

export default ListUserPage;
