import {useRouter} from 'next/router';
import ProductDetail from "../../components/ProductDetail";

export default function Product({ product }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
           <ProductDetail product={product} />
        </div>
    );
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/products.json`);

    // Ensure that the response is OK and handle any errors
    if (!response.ok) {
        throw new Error(`Failed to fetch products, status: ${response.status}`);
    }

    // Parse the JSON from the response
    const products = await response.json();
    const paths = products.map(product => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: true };
}

async function fetchProductData(id) {
    // Find the product with the given ID
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/products.json`);

    // Ensure that the response is OK and handle any errors
    if (!response.ok) {
        throw new Error(`Failed to fetch products, status: ${response.status}`);
    }

    // Parse the JSON from the response
    const products = await response.json();
    return products.find(product => product.id === id);
}

export async function getStaticProps({ params }) {
    // Fetch product data based on params.id
    const product = await fetchProductData(params.id);
    if (!product) {
        // Return a 404 status if the product is not found
        return { notFound: true };
    }
    return { props: { product } };
}
