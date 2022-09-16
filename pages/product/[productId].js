import Link from "next/link";
import Layout from "../../components/Layout";

export default function Products({ product }) {
  return (
    <>
      <Layout title={product.name}>
        <div className='py-2'>
          <Link href='/'>back to products</Link>
        </div>
        <div className='grid md:grid-cols-4 md:gap-3'>
          <div className='md:col-span-2'>
            <Image
              src={product.image}
              alt={product.title}
              width={640}
              height={700}
              layout='responsive'
            ></Image>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.product.id}`
  );
  const products = await res.json();

  return {
    product: { products },
  };
}

export async function getStaticPaths() {
  const products = await fetch("https://fakestoreapi.com/products");
  return {
    paths: products.map((product) => {
      return {
        params: {
          productId: product.Id,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.product.id}`
  );
  const products = await res.json();

  return {
    product: { products },
  };
}
