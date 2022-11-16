import fs from 'fs/promises';
import path from 'path';
import { IProduct } from '../src/type/interface';

interface IProps {
	details: IProduct;
}

const ProductDetail: React.FC<IProps> = ({ details }) => {
	return (
		<div>
			<h2>{details.title}</h2>
			<p>{details.description}</p>
		</div>
	);
};

async function getData() {
	// get file dummy data from folder project by fs
	const filePath = path.join(process.cwd(), 'data', 'dummy.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData.toString());
	return data;
}

export const getStaticProps = async (context: any) => {
	const { params } = context;
	const productId = params.pid;
	const data = await getData(); 
	const productDetail = data.products.find((product: IProduct) => product.id === productId);

	return {
		props: {
			details: productDetail,
		},
	};
};

export const getStaticPaths = async () => {
	const data = await getData();
	const ids = data.products.map((item: IProduct) => item.id);
	// update dynamic path ids
	const pathsWithParams = ids.map((id: string) => ({
		params: {
			pid: id,
		},
	}));
	return {
		paths: pathsWithParams,
		fallback: false,
	};
};

export default ProductDetail;
