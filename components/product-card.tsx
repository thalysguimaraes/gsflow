import Image from 'next/image';
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"

// ProductCard Component
const ProductCard = ({ productImage, productBrand, productCategory, productName, productCurrency, productPrice }: { 
    productImage: string; 
    productBrand: string; 
    productCategory: string; 
    productName: string; 
    productCurrency: string; 
    productPrice: string; 
}) => {
  
    return (
        // Adjusted for dark mode
        <Card className='flex flex-col bg-gray-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300'>
          <CardContent className='flex flex-col'>
    
            {/* Image Wrapper with Hover Effect */}
            <div className="flex justify-center image-wrapper hover:scale-105 transition-transform duration-300 py-24">
              <Image src={productImage} alt={productName} width={300} height={400} objectFit="contain" />
            </div>
    
            <p className="text-xs text-gray-400 uppercase mt-4">{productBrand} · {productCategory}</p>
          </CardContent>
          <CardFooter className='w-full'>
    
            <div className="flex w-full justify-between items-center -mt-5">    
              <p className="text-l text-gray-700 dark:text-gray-300">{productName}</p>
              <span className="text-s text-gray-700 dark:text-gray-300">{productCurrency}{productPrice}</span>
            </div>
          </CardFooter>
        </Card> 
      );
    };
    
    export default ProductCard;
