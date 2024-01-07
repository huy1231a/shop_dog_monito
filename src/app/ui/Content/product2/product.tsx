import ButtonType from "@/app/common/Button/btn";
import React from "react";
import Image from "next/image";

const data = [
  {
    img: "/image2.png",
    name: "Reflex Plus Adult Cat Food Salmon",
    category: "Dog Food",
    size: "385gm",
    price: "140.000 VND",
  },
  {
    img: "/p1.png",
    name: "Reflex Plus Adult Cat Food Salmon",
    category: "Dog Food",
    size: "1.5kg",
    price: "140.000 VND",
  },
  {
    img: "/p2.png",
    name: "Cat scratching ball toy kitten sisal rope ball",
    category: "Dog Food",
    size: "300g",
    price: "140.000 VND",
  },
  {
    img: "/p3.png",
    name: "Cute Pet Cat Warm Nest",
    category: "Cat Food",
    size: "300g",
    price: "1.100.000 VND",
  },
  {
    img: "/p4.png",
    name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    category: "Toy",
    size: "300g",
    price: "140.000 VND",
  },
  {
    img: "/p5.png",
    name: "Costumes Fashion Pet Clother Cowboy Rider",
    category: "Male",
    size: "300g",
    price: "140.000 VND",
  },
  {
    img: "/p6.png",
    name: "Costumes Chicken Drumsti ck Headband",
    category: "Costume",
    size: "300g",
    price: "140.000 VND",
  },
  {
    img: "/p7.png",
    name: "Plush Pet Toy",
    category: "Toy",
    size: "300g",
    price: "140.000 VND",
  },
];

const Products = () => {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="w-[1440px] h-auto bg-transparent">
          <div className="flex justify-between p-4">
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium leading-6 text-black">
                Hard to choose right products for your pets?
              </span>
              <h1 className="text-2xl font-bold leading-9 text-[#003459]">
                Our Products
              </h1>
            </div>
            <div className="border border-[#003459] rounded-full w-[150px] flex items-center justify-center">
              <ButtonType
                title="View More"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
                      stroke="#003459"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-14 p-7">
            {data.map((item) => (
              <div className="bg-white-400 rounded-2xl w-[300px] h-[500px] shadow-lg cursor-pointer">
                <div className="flex justify-center mt-2">
                  <Image
                    src={item.img}
                    alt="img1"
                    width={264}
                    height={264}
                    className="rounded-2xl border-none  transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <h1 className="items-stretch text-base leading-6 font-bold text-black">
                    {item.name}
                  </h1>
                  <div className="flex gap-5">
                    <div>
                      <p className="font-normal text-xs leading-4 text-[#667479]">
                        Product:{" "}
                        <span className="font-bold text-xs leading-4 text-[#667479]">
                          {item.category}
                        </span>
                      </p>
                    </div>
                    <div className="font-normal text-xs leading-4 text-[#667479]">
                      -
                    </div>
                    <div>
                      <p className="font-normal text-xs leading-4 text-[#667479]">
                        Size:{" "}
                        <span className="font-bold text-xs leading-4 text-[#667479]">
                          {item.size}
                        </span>
                      </p>
                    </div>
                  </div>
                  <h1 className="font-bold text-base leading-5 text-black">
                    {item.price}
                  </h1>
                  <div
                    className="bg-[#FCEED5] h-[50px] rounded-[8px] inline-flex"
                    style={{ padding: " 6px 10px 4px 10px" }}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M3.7682 10.1406L5.66663 9.44918C5.72523 9.42578 5.79554 9.41406 5.86581 9.41406H18.0299C18.358 9.41406 18.6158 9.67184 18.6158 10V18.2422C18.6158 19.2148 17.8307 20 16.858 20H5.13925C4.16656 20 3.38144 19.2148 3.38144 18.2422V10.6914C3.38144 10.4453 3.53382 10.2227 3.7682 10.1406Z"
                          fill="#FC1A40"
                        />
                        <path
                          d="M3.38144 10.6914V18.2422C3.38144 19.2148 4.16656 20 5.13925 20H10.9986V9.41406H5.86581C5.7955 9.41406 5.72519 9.42578 5.66663 9.44918L3.7682 10.1406C3.53382 10.2227 3.38144 10.4453 3.38144 10.6914Z"
                          fill="#C60034"
                        />
                        <path
                          d="M3.59238 3.81984C3.79156 3.01124 4.38925 2.37847 5.19785 2.12062C5.99472 1.87449 6.85023 2.05031 7.47129 2.61277L8.8307 3.80812L9.10019 2.01519C9.2291 1.19488 9.75644 0.50343 10.5416 0.175344C10.6939 0.116712 10.8462 0.0698366 10.9986 0.0463991C11.6431 -0.0825072 12.3111 0.0581178 12.8502 0.456594C13.565 0.972219 13.9283 1.83941 13.8111 2.70656C13.6822 3.57374 13.0962 4.31202 12.2643 4.60499L10.9986 5.06202L9.44 5.63624C9.42828 5.63624 9.42828 5.63624 9.42828 5.63624L6.72125 6.6323C6.45175 6.72609 6.1705 6.773 5.90097 6.773C5.32668 6.773 4.76421 6.56199 4.3189 6.16359C3.66269 5.57765 3.38144 4.67527 3.59238 3.81984Z"
                          fill="#FE9923"
                        />
                        <path
                          d="M4.31894 6.16361C4.76425 6.56201 5.32675 6.77303 5.90101 6.77303C6.1705 6.77303 6.45175 6.72611 6.72128 6.63232L9.42831 5.63627C9.42831 5.63627 9.42831 5.63627 9.44003 5.63627L10.9986 5.06205V0.0463867C10.8463 0.0698633 10.6939 0.116699 10.5416 0.175332C9.75648 0.503418 9.2291 1.19486 9.10023 2.01518L8.83074 3.80811L7.47132 2.61275C6.85027 2.05029 5.99476 1.87447 5.19788 2.12061C4.38929 2.37846 3.79163 3.01123 3.59242 3.81982C3.38144 4.67529 3.66269 5.57768 4.31894 6.16361Z"
                          fill="#FE8821"
                        />
                        <path
                          d="M1.37755 9.1445L2.17443 11.3476C2.26821 11.582 2.49087 11.7226 2.72524 11.7226C2.79556 11.7226 2.86587 11.7109 2.92442 11.6875L8.98306 9.48439L9.5338 7.66798L10.9986 7.99607L12.2877 8.28904L18.3463 6.08591C18.651 5.96876 18.8033 5.62888 18.6979 5.33591L17.8893 3.13286C17.7369 2.68755 17.4088 2.33591 16.9869 2.13673C16.565 1.93755 16.0846 1.91408 15.6393 2.07814L10.9986 3.76564L10.6822 3.88279C10.6822 3.88279 9.41657 6.1797 9.38138 6.1797C9.3579 6.1797 8.85403 5.89845 8.36185 5.62888C7.86978 5.35935 7.37755 5.07814 7.37755 5.07814L2.43228 6.88279C1.98696 7.04685 1.6354 7.37501 1.43622 7.79689C1.23693 8.21872 1.21353 8.69923 1.37755 9.1445Z"
                          fill="#FF3E75"
                        />
                        <path
                          d="M1.37753 9.14449L2.17441 11.3476C2.2682 11.582 2.49085 11.7226 2.72523 11.7226C2.79554 11.7226 2.86585 11.7109 2.92441 11.6875L8.98304 9.48438L9.53378 7.66797L10.9986 7.99605V3.76562L10.6822 3.88277C10.6822 3.88277 9.4166 6.17969 9.3814 6.17969C9.35792 6.17969 8.85406 5.89844 8.36187 5.62887C7.86976 5.35934 7.37753 5.07812 7.37753 5.07812L2.43226 6.88277C1.98695 7.04684 1.63538 7.375 1.4362 7.79688C1.23691 8.21871 1.21351 8.69922 1.37753 9.14449Z"
                          fill="#FC1A40"
                        />
                        <path
                          d="M12.7564 9.41406V20H9.24081V9.41406H12.7564Z"
                          fill="#FCBF29"
                        />
                        <path
                          d="M10.6822 3.88281L10.9987 4.75L12.2877 8.2891L10.9987 8.75789L9.53382 9.28523L8.98308 9.48441L7.37753 5.07816L10.6822 3.88281Z"
                          fill="#FCBF29"
                        />
                        <path
                          d="M9.24066 9.41406H10.9985V20H9.24066V9.41406Z"
                          fill="#FE9923"
                        />
                        <path
                          d="M7.37753 5.07816L8.98304 9.48441L9.53378 9.2852L10.9986 8.75785V4.75L10.6822 3.88281L7.37753 5.07816Z"
                          fill="#FE9923"
                        />
                      </svg>
                      <p className="text-sm font-bold leading-5 text-[#002A48]">
                        -
                      </p>
                      <h1 className="text-sm font-bold leading-5 text-[#002A48] ">
                        Free Toy & Free Shaker
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
