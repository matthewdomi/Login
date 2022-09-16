import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const ProductItems = ({ products }) => {
  return (
    <>
      <Layout title='Product'>
        <h1 className='text-lg p-5 px-10  pt-20'>List of Products</h1>
        <div className='grid grid-cols-1 p-10 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {products.map((product) => {
            return (
              <>
                <div className='card h-45 w-30'>
                  <Link href={`${product.id}`}>
                    <a>
                      <img
                        src={product.image}
                        alt={product.title}
                        className='rounded shadow'
                      />
                    </a>
                  </Link>

                  <div
                    key={product.id}
                    className='flex flex-col items-center justify-center p-5'
                  >
                    <Link href={`${product.id}`}>
                      <a>
                        <h2 className='text-lg text-blue-600'>
                          {product.title}
                        </h2>
                      </a>
                    </Link>

                    <p className='mb-2 text-slate-600 '>
                      {product.description}
                    </p>
                    <p>Rating: {product.rating.rate}</p>
                    <p className='bg-red-100 rounded p-1 m-1'>
                      ${product.price}
                    </p>
                    <button
                      className='primary-button text-white hover:text-orange-600 hover:bg-orange-200 hover:text-bold hover:outline-50'
                      type='button'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <div className='flex flex-col items-center justify-center p-5'></div>
        </div>
      </Layout>
    </>
  );
};

export default ProductItems;

export async function getStaticProps({ product }) {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
