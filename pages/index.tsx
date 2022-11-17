import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

type TItemProduct = {
	id: string | number;
	title: string;
};
interface IProps {
	products: TItemProduct[];
}

const HomePage: React.FC<IProps> = ({ products }) => {
	return (
		<div>
			<h1>The Home Page</h1>
			<ul>
				{products &&
					products.map((item) => (
						<li key={item.id}>
							<Link href={`/${item.id}`}>{item.title}</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export const getStaticProps = async () => {
	console.log('Re-fetching data');
	// get file dummy data from folder project by fs
	const filePath = path.join(process.cwd(), 'data', 'dummy.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData.toString());

	if (!data) {
		return {
			redirect: {
				destination: '/no-data',
			},
		};
	}

	if (data.products.length === 0) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			products: data.products,
		},
		// this is iSSG: after 10s will re-fetch data
		revalidate: 10,
	};
};

export default HomePage;
